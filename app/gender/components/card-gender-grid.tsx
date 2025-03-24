import { Result } from '@/app/@types/types';
import Link from 'next/link';
import React from 'react';

interface GenderGridProps {
    data: Result[]
}
const GenderGrid: React.FC<GenderGridProps> = ({ data }) => {
    return (
        <>
            <div className="w-full">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-10 mb-10 text-left">
                    {data?.map((item) => (
                        <div key={item.list_name} className="flex flex-col">
                            <div className="flex flex-col gap 1">
                                <Link href={'#'} className="text-[#5062F0] underline font-normal">
                                    {item.list_name}
                                </Link>
                                <p className="text-[#9296AC] font-normal text-xs">Atualizada em {item.updated}</p>
                            </div>
                            <div className='flex flex-col mt-2'>
                            <p className="text-xs font-normal text-[#454A67]">Última publicação em {new Date(item.newest_published_date).toLocaleDateString('pt-BR')}</p>
                            <p className="text-xs font-normal text-[#454A67]">Publicação mais antiga {new Date(item.newest_published_date).toLocaleDateString('pt-BR')}</p>
                            </div>                         
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default GenderGrid;