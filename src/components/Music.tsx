import { ILastFMAlbum, ILastFMArtist, ILastFMTrack } from "@/lib/fm/types";

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
      <h2>Recent Listening (WIP)</h2>
      <hr />
      <br />
      <div className="flex justify-between">
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
      <br />
      <h3>Top Albums</h3>
      <br />
      <div>
        {topAlbums.map((album) => (
          <div key={album.mbid}>{album.name}</div>
        ))}
      </div>
    </>
  );
};
