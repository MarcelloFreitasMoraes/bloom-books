import React from 'react';
import { GoStarFill } from 'react-icons/go';
import ContainerTitle from './container-title';
import Search from './search';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <>
            <div className="bg-[#5062F0] p-4 h-24 lg:h-16 flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-16">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link href={`/gender?page=1&limit=5&list=true&grid=false`} className="text-white text-3xl font-bold">Bloom Books</Link>
                    <GoStarFill color="#fff" size={24} className="lg:ml-4 lg:hidden" />
                </div>
                <Search />
                <GoStarFill color="#fff" size={24} className="lg:ml-4" />
            </div>
            <ContainerTitle />
        </>
    )
}

export default Header;