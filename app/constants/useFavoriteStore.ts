import { create } from 'zustand';
import { Book } from '../@types/types';

interface FavoriteStore {
    favorites: Book[];
    addFavorite: (book: Book) => void;
    removeFavorite: (isbn: string) => void;
    loadFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: [],

    addFavorite: (book) => set((state) => {
        const updatedFavorites = [...state.favorites, book];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return { favorites: updatedFavorites };
    }),

    removeFavorite: (isbn) => set((state) => {
        const updatedFavorites = state.favorites.filter((fav) => fav.primary_isbn10 !== isbn);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return { favorites: updatedFavorites };
    }),

    loadFavorites: () => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            set({ favorites: JSON.parse(savedFavorites) });
        }
    },
}));
