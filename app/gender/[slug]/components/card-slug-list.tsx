import React from 'react';
import Image from "next/image";
import { Book } from '@/app/@types/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Favorite from './favorite';

interface CardSlugLineProps {
    data: Book[]
}

const CardSlugLine: React.FC<CardSlugLineProps> = ({ data }) => {
    return (
        <>
            {data.length > 0 ? (
                data.map((item) => {
                    console.log(item);

                    return (
                        <div key={item.rank} className="flex gap-4 py-4 pl-6">
                            <div className="w-[107px] lg:w-[140px] lg:h-[167px]">
                                <Image
                                    className="w-[107px] lg:w-[167px]2 h-[107px] lg:h-[167px]"
                                    src={item.book_image}
                                    alt={item.title}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className='flex flex-col lg:items-center gap-1 lg:flex-row'>
                                    <h2 className="text-[#0E1337] text-base font-bold leading-snug">{item.title}</h2>
                                    <div className='flex gap-2 items-center'>
                                        <p className="text-{#454A67] font-normal text-sm leading-normal">{item.contributor}
                                        </p>
                                        <Favorite item={item} />
                                    </div>
                                </div>
                                <p className="text-[#0E1337] font-normal text-sm">{item.description}</p>
                                <p className="text-black font-normal text-sm">{item.publisher}</p>
                                <p className="text-black font-normal text-sm">Rank {item.rank}</p>
                                <div className='pt-1'>
                                    <Link href={item.buy_links[0].url}>
                                        <Button className="px-3 py-2 rounded-3xl font-bold text-white bg-[#5062F0] cursor-pointer w-{136px] h-8"
                                            style={{ fontSize: '12px' }}
                                        >
                                            Comprar por R${item.price}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : (
                <p className="text-black font-normal text-xl">Nenhum resultado encontrado.</p>
            )}
        </>
    )
}

export default CardSlugLine;