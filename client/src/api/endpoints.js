const ENDPOINTS = {
  baseURL: "https://api.spotify.com/v1",
  artistTopTracks: `/artists/{id}/top-tracks?market={country}`,
  usersTopArtist: `/me/top/artists?time_range=short_term&limit={limit}`,
  //Base URL Of Spotify API
};

export default ENDPOINTS;
