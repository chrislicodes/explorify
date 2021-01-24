require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const uuid = require("uuid").v4;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const PORT = process.env.PORT || 8000;
const REDIRECT_URI =
  process.env.REDIRECT_URI || "http://localhost:8000/callback";

const authStateKey = "spofity_auth_state";

const app = express();

// app.use(bodyParser.json());

app.get("/login", (req, res, next) => {
  const state = uuid();
  const scopes = "user-read-private user-read-email";

  res.cookie(authStateKey, state);

  res.redirect(`https://accounts.spotify.com/authorize?
  response_type=code
  &client_id=${CLIENT_ID}
  &redirect_uri=${REDIRECT_URI}
  &state=${state}
  `);
});

app.get("/callback", (req, res, next) => {});

app.listen(PORT);
