import { getAllBooks } from "@/lib/api";
import Image from "next/image";

const BookItem = ({ id, title, rating, genres, cover, link, summary }) => (
  <li key={id}>
    {/* <Image
      width={200}
      height={200}
      className="object-fit"
      src={cover.url}
      alt={title}
    /> */}
    <a target="_blank" href={link}>
      {title}
    </a>{" "}
    {rating}/5 {genres.map((genre: string) => genre).join(", ")}
    <br />
    <br />
    <em>{summary}</em>
    <br />
    <br />
  </li>
);

const Library = ({ books }) => (
  <>
    <br />
    <h2>Library</h2>
    <hr />
    <br />
    <ul>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </ul>
  </>
);

export default async function Home() {
  const books = await getAllBooks();

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
      {/* <Library books={books} /> */}
    </main>
  );
}
