import { apiKey, baseUrl } from "./http"

import "server-only";
import { unstable_cache } from "next/cache";

const fetchGender = unstable_cache(
  async () => {
    const url = `${baseUrl}/lists/names.json?api-key=${apiKey}`;
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) throw new Error("Erro ao buscar dados");

    return response.json();
  },
  ["fetch-gender"]
);

export default fetchGender;
