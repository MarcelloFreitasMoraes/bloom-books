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
                <div className={isOpen ? 'bg-[#0B1A8E] w-14 h-16 flex items-center max-lg:hidden' : 'w-14 h-12 flex items-center z-20 relative max-lg:hidden'}>
                    <GoStarFill onClick={toggleSidebar} color="#fff" size={24} className='lg:ml-4 cursor-pointer' />
                </div>
            ) : (
                <div className={isOpen ? 'bg-[#0B1A8E] w-10 h-10 flex items-center justify-center lg:hidden' : 'w-10 h-10 flex items-center justify-center lg:hidden'}>
                    <GoStarFill onClick={toggleSidebar} color="#fff" size={24} className={'cursor-pointer lg:hidden'} />
                </div>

            )}
        </>
    )
}

export default Favorites;