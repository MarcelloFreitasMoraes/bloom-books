import { apiKey, baseUrl } from "./http"

import "server-only";
import { unstable_cache } from "next/cache";

const fetchBooks = unstable_cache(
  async (genreId: string) => {
    const url = `${baseUrl}/lists/${genreId}.json?api-key=${apiKey}`;
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) throw new Error("Erro ao buscar dados");

    return response.json();
  },
  ["fetch-books"]
);

export default fetchBooks;
