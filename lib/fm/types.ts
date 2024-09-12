export type ILastFMMethod =
  | "user.getinfo"
  | "user.getrecenttracks"
  | "user.gettopalbums"
  | "user.gettopartists"
  | "user.gettoptracks";

export interface ILastFMMethods {
  USER: {
    [key: string]: ILastFMMethod;
  };
}

export interface ILastFMOptions {
  limit?: number;
  period?: string;
}

export interface ILastFM {
  User: {
    getInfo: () => Promise<{ user: ILastFMUser }>;
    getRecentTracks: (
      options: Omit<ILastFMOptions, "period">
    ) => Promise<ILastFMTrack[]>;
    getTopAlbums: (options: ILastFMOptions) => Promise<ILastFMAlbum[]>;
    getTopArtists: (options: ILastFMOptions) => Promise<ILastFMArtist[]>;
    getTopTracks: (options: ILastFMOptions) => Promise<ILastFMTrack[]>;
  };
}

/// LASTFM API RESPONSES

export interface ILastFMRecentTracksResponse {
  recenttracks: {
    track: ILastFMTrack[];
    "@attr": {
      page: string;
      perPage: string;
      user: string;
      total: string;
      totalPages: string;
    };
  };
}

interface ILastFMAttrMeta {
  page: string;
  perPage: string;
  user: string;
  total: string;
  totalPages: string;
}

export interface ILastFMGetTopTracksResponse {
  toptracks: {
    track: ILastFMTrack[];
    "@attr": ILastFMAttrMeta;
  };
}

export interface ILastFMGetTopAlbumsResponse {
  topalbums: {
    album: ILastFMAlbum[];
    "@attr": ILastFMAttrMeta;
  };
}

export interface ILastFMGetTopArtistsResponse {
  topartists: {
    artist: ILastFMArtist[];
    "@attr": ILastFMAttrMeta;
  };
}

export interface ILastFMArtist {
  name: string;
  mbid: string;
  playcount: string;
  streamable: string;
  image: ILastFMImage[];
  url: string;
  "@attr": {
    rank: string;
  };
}

export interface ILastFMAlbum {
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
  image: ILastFMImage[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": {
    rank: string;
  };
  name: string;
}

interface ILastFMUser {
  name: string;
  age: string;
  subscriber: string;
  realname: string;
  bootstrap: string;
  playcount: string;
  artist_count: string;
  playlists: string;
  track_count: string;
  album_count: string;
  image: ILastFMImage[];
  registered: {
    unixtime: string;
    "#text": string;
  };
  country: string;
  gender: string;
  url: string;
  type: string;
}

interface ILastFMImage {
  size: string;
  "#text": string;
}

export interface ILastFMTrack {
  streamable: {
    fulltrack: string;
    "#text": string;
  };
  mbid: string;
  name: string;
  image: ILastFMImage[];
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
  url: string;
  duration: string;
  "@attr": {
    rank: string;
  };
  playcount: string;
}
