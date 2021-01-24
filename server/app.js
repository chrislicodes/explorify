require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const uuid = require("uuid").v4;
const querystring = require("querystring");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const { URLSearchParams } = require("url");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const PORT = process.env.PORT || 8000;
const REDIRECT_URI =
  process.env.REDIRECT_URI || "http://localhost:8080/callback";

const authStateKey = "spotify_auth_state";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.get("/login", (req, res, next) => {
  const state = uuid();
  const scopes = "user-read-private user-read-email";

  res.cookie(authStateKey, state);

  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: "code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      state: state,
    })}`
  );
});

app.get("/callback", (req, res, next) => {
  const code = req.query.code;
  const state = req.query.state;
  const storedState = req.cookies ? req.cookies[authStateKey] : null;
  if (storedState === null || storedState !== state) {
    throw new Error("invalid");
  } else {
    res.clearCookie(authStateKey);

    const data = {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
    };

    axios
      .post(
        `https://accounts.spotify.com/api/token`,
        querystring.stringify(data),
        {
          headers: {
            Authorization: `Basic ${new Buffer.from(
              `${CLIENT_ID}:${CLIENT_SECRET}`
            ).toString("base64")}`,
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        let { access_token, refresh_token } = res.data;
        return axios.get(`https://api.spotify.com/v1/me`, {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        });
      })
      .then((userData) => {
        console.log(userData.data);
        res.status(200).json(userData.data);
      })
      .catch((err) => console.log(err));
  }
});

app.listen(PORT);
