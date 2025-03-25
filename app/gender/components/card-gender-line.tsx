import { Result } from '@/app/@types/types';
import Link from 'next/link';
import React from 'react';

interface GenderLineProps {
    data: Result[]
    url: string
}
const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const GenderLine: React.FC<GenderLineProps> = ({ data, url }) => {
    return (
        <>
            {data?.map((item) => {
                const slug = slugify(item.list_name);
                return (
                    <div key={item.list_name} className="grid grid-cols-1 lg:grid-cols-3 gap-1 my-5 lg:gap-4 lg:my-10 items-center lg:pb-4">
                        <div className="lg:flex items-center gap-1 lg:gap-4">
                            <Link href={`/gender/${slug}?${url}`} className="text-[#5062F0] underline font-normal">
                                {item.list_name}
                            </Link>
                            <p className="text-[#9296AC] font-normal text-xs">Atualizada em {item.updated}</p>
                        </div>
                        <p className="lg:text-center text-xs font-normal text-[#454A67]">
                            Última publicação em {new Date(item.newest_published_date).toLocaleDateString('pt-BR')}
                        </p>
                        <p className="lg:text-end text-xs font-normal text-[#454A67]">
                            Publicação mais antiga {new Date(item.newest_published_date).toLocaleDateString('pt-BR')}
                        </p>
                    </div>
                );
            })}
        </>
    );
};

export default GenderLine;