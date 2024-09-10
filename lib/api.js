const BOOK_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  author
  genres
  rating
  cover {
    url
  }
  link
  summary
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: {
        tags: ["books"],
      },
    }
  ).then((response) => response.json());
}

function extractBooksEntries(fetchResponse) {
  return fetchResponse?.data?.bookCollection?.items;
}

export async function getAllBooks(limit = 3, isDraftmode = false) {
  const books = await fetchGraphQL(
    `
    query {
      bookCollection(limit: ${limit}, where: {sys: {publishedAt_exists: ${
      isDraftmode ? "false" : "true"
    }}}, order: sys_publishedAt_DESC) {
        items {
          ${BOOK_GRAPHQL_FIELDS}
        }
      }
    }
  `,
    isDraftmode
  );

  return extractBooksEntries(books);
}
