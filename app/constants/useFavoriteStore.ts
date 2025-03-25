import { create } from 'zustand';

interface Book {
    primary_isbn10: string;
    title: string;
    contributor: string;
    book_image: string;
    buy_links: { url: string }[];
}

interface FavoriteStore {
    favorites: Book[];
    addFavorite: (book: Book) => void;
    removeFavorite: (isbn: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: [],
    
    addFavorite: (book) => set((state) => {
        const updatedFavorites = [...state.favorites, book];
        sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return { favorites: updatedFavorites };
    }),

    removeFavorite: (isbn) => set((state) => {
        const updatedFavorites = state.favorites.filter((fav) => fav.primary_isbn10 !== isbn);
        sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return { favorites: updatedFavorites };
    }),
}));
