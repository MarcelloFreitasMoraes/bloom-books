import React from 'react';
import ContainerTitle from './container-title';
import Search from './search';
import Link from 'next/link';
import Favorites from './favorites';
import { ITEMS_LIMIT, PAGE } from '@/app/utils/items-limit';

const Header: React.FC = () => {
    return (
        <>
            <div className="bg-[#5062F0] lg:p-4 h-24 lg:h-16 flex flex-col lg:flex-row items-center lg:justify-between pr-0 pl-4 lg:px-16">
                <div className="flex items-center justify-between w-full lg:w-auto my-1 lg:my-0">
                    <Link href={`/gender?page=${PAGE}&limit=${ITEMS_LIMIT}&list=true&grid=false`} className="text-white text-3xl font-bold">Bloom Books</Link>
                    <Favorites visible />
                </div>
                <Search />
                <Favorites />
            </div>
            <ContainerTitle />
        </>
    )
}

export default Header;