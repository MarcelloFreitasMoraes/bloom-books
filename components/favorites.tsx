'use client';
import { useSidebarStore } from '@/app/constants/useSidebarStore';
import React from 'react';
import { GoStarFill } from 'react-icons/go';

interface FavoritesProps {
    visible?: boolean;
}

const Favorites: React.FC<FavoritesProps> = ({ visible }) => {
    const { toggleSidebar, isOpen } = useSidebarStore();
    return (
        <>
        {!visible ? (
        <div className={isOpen ? 'bg-[#0B1A8E] w-14 h-12 flex items-center mt-4' : 'w-14 h-12 flex items-center mt-4 z-20 relative'}>
            <GoStarFill onClick={toggleSidebar} color="#fff" size={24} className='lg:ml-4 cursor-pointer' />
        </div>
        ) : null}
        </>
    )
}

export default Favorites;