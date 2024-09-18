import {
  ILastFMMethod,
  ILastFMOptions,
  ILastFMMethods,
  ILastFM,
  ILastFMGetTopTracksResponse,
  ILastFMRecentTracksResponse,
  ILastFMGetTopAlbumsResponse,
  ILastFMGetTopArtistsResponse,
} from "./types";

const API_KEY = process.env.LASTFM_API_KEY;
const API_ROOT = "https://ws.audioscrobbler.com/2.0/";
const USER = "jv-la";

const METHODS: ILastFMMethods = {
  USER: {
    GET_INFO: "user.getinfo",
    GET_RECENT_TRACKS: "user.getrecenttracks",
    GET_TOP_ALBUMS: "user.gettopalbums",
    GET_TOP_ARTISTS: "user.gettopartists",
    GET_TOP_TRACKS: "user.gettoptracks",
  },
};

const prepareTracks = (response: ILastFMRecentTracksResponse) =>
  response.recenttracks.track;
const prepareTopTracks = (response: ILastFMGetTopTracksResponse) =>
  response.toptracks.track;
const prepareTopArtists = (response: ILastFMGetTopArtistsResponse) =>
  response.topartists.artist;
const prepareTopAlbums = (response: ILastFMGetTopAlbumsResponse) =>
  response.topalbums.album;

const buildQueryParams = (options: ILastFMOptions) => {
  const params = Object.entries(options)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return params ? `&${params}` : "";
};

const LastFM: () => ILastFM = () => {
  const doFetch = (method: ILastFMMethod, options = {}) => {
    const queryParams = buildQueryParams(options);

    return fetch(
      `${API_ROOT}?method=${method}&user=${USER}&api_key=${API_KEY}&format=json${queryParams}`
    );
  };

  return {
    User: {
      getInfo: () =>
        doFetch(METHODS.USER.GET_INFO).then((response) => response.json()),
      getRecentTracks: (options: Omit<ILastFMOptions, "period">) =>
        doFetch(METHODS.USER.GET_RECENT_TRACKS, options)
          .then((response) => response.json())
          .then(prepareTracks),
      getTopAlbums: (options: ILastFMOptions) =>
        doFetch(METHODS.USER.GET_TOP_ALBUMS, options)
          .then((response) => response.json())
          .then(prepareTopAlbums),
      getTopArtists: (options: ILastFMOptions) =>
        doFetch(METHODS.USER.GET_TOP_ARTISTS, options)
          .then((response) => response.json())
          .then(prepareTopArtists),
      getTopTracks: (options: ILastFMOptions) =>
        doFetch(METHODS.USER.GET_TOP_TRACKS, options)
          .then((response) => response.json())
          .then(prepareTopTracks),
    },
  };
};

export { LastFM };
