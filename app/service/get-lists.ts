import { apiKey, baseUrl } from "./http"

export interface ListData {
  description?: string
  image?: string
  name?: string
  price?: number
  id?: number
  delete?: boolean
  decrement?: boolean
}

export interface IBooks extends ListData {
  amount?: number
  total?: number
}

export const fetchLists = async () => {
  const url = `${baseUrl}/lists.json?api-key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};