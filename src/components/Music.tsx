export const Music = ({ topTracks }: { topTracks: any[] }) => {
  return (
    <>
      <br />
      <br />
      <h2>Recent Listening</h2>
      <hr />
      <ul>
        {topTracks.map((track: any) => (
          <li key={track.mbid}>
            {track.artist.name} - {track.name}
          </li>
        )) || "No tracks found"}
      </ul>
    </>
  );
};
