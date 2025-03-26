import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { Book } from '@/app/@types/types';
import Favorite from './favorite';

interface CardSlugGridProps {
    data: Book[]
}

const CardSlugGrid: React.FC<CardSlugGridProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.rank} className="flex flex-col gap-4 p-4 h-full">
              <div className="w-[153px] lg:w-[140px] lg:h-[167px] h-[153px]">
                <Image
                  className="w-[107px] lg:w-[167px]2 h-[153px] lg:h-[167px]"
                  src={item.book_image}
                  alt={item.title}
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0E1337] text-base font-bold leading-snug">
                    {item.title}
                  </h2>
                  <div className='flex gap-1 items-center'>
                  <p className="text-[#454A67] font-normal text-sm leading-normal">
                    {item.contributor}
                  </p>
                    <Favorite item={item} />
                  </div>
                </div>
                <p className="text-[#0E1337] font-normal text-sm">{item.description}</p>
                <p className="text-black font-normal text-sm">{item.publisher}</p>
                <p className="text-black font-normal text-sm">Rank {item.rank}</p>
                <div className="flex-grow"></div> {/* Espaço para empurrar o botão para baixo */}
                <div className="pt-1">
                  <Link href={item.buy_links[0].url}>
                    <Button
                      className="p-3 rounded-3xl font-bold text-white bg-[#5062F0] cursor-pointer w-{136px] h-8"
                      style={{ fontSize: "12px" }}
                    >
                      Comprar por R${item.price}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-black font-normal text-xl">Nenhum resultado encontrado.</p>
        )}
      </div>      
    )
}

export default CardSlugGrid;