import fetch from "../util/fetch";

const clientId = "888d3ab535b34312823ea7863681748e";
const redirectUrl = "";
const scopes = ["playlist-modify-private"];

class ImplicitGrant {
  static login() {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=' + clientId +
      '&redirect_uri=' + encodeURIComponent(redirectUrl) +
      '&scope=' + encodeURIComponent(scopes.join(" ")) +
      '&response_type=code';
  }
}

export default ImplicitGrant;