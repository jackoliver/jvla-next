// import { getAllBooks } from "@/lib/api";
import { LastFM } from "@/lib/fm";

import { Music } from "../components/Music";

// const BookItem = ({ id, title, rating, genres, cover, link, summary }) => (
//   <li key={id}>
//     {/* <Image
//       width={200}
//       height={200}
//       className="object-fit"
//       src={cover.url}
//       alt={title}
//     /> */}
//     <a target="_blank" href={link}>
//       {title}
//     </a>{" "}
//     {rating}/5 {genres.map((genre: string) => genre).join(", ")}
//     <br />
//     <br />
//     <em>{summary}</em>
//     <br />
//     <br />
//   </li>
// );

// const Library = ({ books }) => (
//   <>
//     <br />
//     <h2>Library</h2>
//     <hr />
//     <br />
//     <ul>
//       {books.map((book) => (
//         <BookItem key={book.id} {...book} />
//       ))}
//     </ul>
//   </>
// );

export default async function Home() {
  // const books = await getAllBooks();

  const fm = LastFM().User;

  const topAlbums = await fm.getTopAlbums({
    limit: 5,
    period: "7day",
  });
  const topTracks = await fm.getTopTracks({
    limit: 5,
    period: "1month",
  });
  const topArtists = await fm.getTopArtists({
    limit: 5,
    period: "1month",
  });

  return (
    <main>
      <p>
        Jack-Edward Oliver. <br />
        <br />
        Currently in Göteborg, Sweden. Originally from Oxford, UK.
        <br />
        Working as a Staff UX Engineer @{" "}
        <a href="https://cloudbees.com">CloudBees</a>. <br />
        <br /> Find me on{" "}
        <a href="https://linkedin.com/in/mrjackoliver">LinkedIn</a> /{" "}
        <a href="https://github.com/jackoliver">GitHub</a>. Or{" "}
        <a href="mailto:jack@jv-la.com">send me an email</a>.
      </p>

      <Music
        topTracks={topTracks}
        topAlbums={topAlbums}
        topArtists={topArtists}
      />
      {/* <Library books={books} /> */}
    </main>
  );
}
