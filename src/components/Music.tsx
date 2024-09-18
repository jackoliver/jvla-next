/* eslint-disable @typescript-eslint/no-unused-vars */

import { ILastFMAlbum, ILastFMArtist, ILastFMTrack } from "@/lib/fm/types";
import Image from "next/image";

interface MusicProps {
  topTracks: ILastFMTrack[];
  topAlbums: ILastFMAlbum[];
  topArtists: ILastFMArtist[];
}

export const Music = ({ topTracks, topAlbums, topArtists }: MusicProps) => {
  return (
    <>
      <br />
      <br />
      <h2>Recent Listening: Albums</h2>
      <hr />
      <br />
      {/* <div className="flex justify-between">
        <h3>Top Tracks</h3>
      </div>
      <br />
      <div>
        {topTracks.map((track: ILastFMTrack) => (
          <div key={track.mbid}>
            {track.artist.name} - {track.name}
          </div>
        ))}
      </div>
      <br />
      <h3>Top Artists</h3>
      <br />
      <div>
        {topArtists.map((artist) => (
          <div key={artist.mbid}>{artist.name}</div>
        ))}
      </div>
      <br /> */}
      <div
        style={{
          display: "grid",
          gap: "16px",
          justifyContent: "start",
        }}
        className="album-grid"
      >
        {topAlbums.map((album) => (
          <div
            style={{
              display: "flex",
              gap: 16,
              flexDirection: "column",
            }}
            key={album.mbid}
          >
            <div>
              <Image
                style={{ display: "block", width: "100%", aspectRatio: "1/1" }}
                src={album.image[3]["#text"]}
                width="420"
                height="420"
                alt={album.name}
                className="album"
              />
            </div>
            <div>
              <div style={{ fontWeight: "bold", color: "white" }}>
                {album.name}
              </div>
              <div style={{ fontSize: ".9rem" }}>{album.artist.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
