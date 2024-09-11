const API_KEY = process.env.LASTFM_API_KEY;
const API_ROOT = "https://ws.audioscrobbler.com/2.0/";
const USER = "jv-la";

const METHODS = {
  USER: {
    GET_INFO: "user.getinfo",
    GET_RECENT_TRACKS: "user.getrecenttracks",
    GET_TOP_ALBUMS: "user.gettopalbums",
    GET_TOP_ARTISTS: "user.gettopartists",
    GET_TOP_TRACKS: "user.gettoptracks",
  },
};

const prepareTracks = (response) => response.recenttracks.track;
const prepareTopTracks = (response) => response.toptracks.track;

const buildQueryParams = (options) => {
  // only add them if they exist
  const params = Object.entries(options)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return params ? `&${params}` : "";
};

const LastFM = () => {
  const doFetch = (method, options = {}) => {
    const queryParams = buildQueryParams(options);

    return fetch(
      `${API_ROOT}?method=${method}&user=${USER}&api_key=${API_KEY}&format=json${queryParams}`
    );
  };

  return {
    User: {
      getInfo: () =>
        doFetch(METHODS.USER.GET_INFO).then((response) => response.json()),
      getRecentTracks: (options) =>
        doFetch(METHODS.USER.GET_RECENT_TRACKS, options)
          .then((response) => response.json())
          .then(prepareTracks),
      getTopAlbums: (options) =>
        doFetch(METHODS.USER.GET_TOP_ALBUMS, options).then((response) =>
          response.json()
        ),
      getTopArtists: (options) =>
        doFetch(METHODS.USER.GET_TOP_ARTISTS, options).then((response) =>
          response.json()
        ),
      getTopTracks: (options) =>
        doFetch(METHODS.USER.GET_TOP_TRACKS, options)
          .then((response) => response.json())
          .then(prepareTopTracks),
    },
  };
};

export { LastFM };
