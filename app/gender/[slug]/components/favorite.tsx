'use client';
import { useFavoriteStore } from '@/app/constants/useFavoriteStore';
import React, { useEffect } from 'react';
import { GoStar, GoStarFill } from 'react-icons/go';

interface FavoriteProps {
    item: {
        primary_isbn10: string;
        title: string;
        contributor: string;
        book_image: string;
        buy_links: { url: string }[];
    };
}

const Favorite: React.FC<FavoriteProps> = ({ item }) => {
    const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
    const isFavorite = favorites.some((fav) => fav.primary_isbn10 === item.primary_isbn10);

    useEffect(() => {
        const savedFavorites = sessionStorage.getItem('favorites');
        if (savedFavorites) {
            useFavoriteStore.setState({ favorites: JSON.parse(savedFavorites) });
        }
    }, []);

    return (
        <>
            {isFavorite ? (
                <GoStarFill 
                    color="#5062F0" 
                    size={11} 
                    className="cursor-pointer" 
                    onClick={() => removeFavorite(item.primary_isbn10)}
                />
            ) : (
                <GoStar 
                    color="#5062F0" 
                    size={11} 
                    className="cursor-pointer" 
                    onClick={() => addFavorite(item)}
                />
            )}
        </>
    );
};

export default Favorite;
