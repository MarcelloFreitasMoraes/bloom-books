'use client'
import { formatSlug } from '@/app/utils/format-slug';
import { ITEMS_LIMIT, ITEMS_LIMIT_OPTIONS, PAGE } from '@/app/utils/items-limit';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoGridSharp } from 'react-icons/io5';

const ICON_COLOR = {
  active: '#5062F0',
  inactive: '#D0D3E2',
}

const ContainerTitle: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const list = searchParams.get('list') === 'true'
  const grid = searchParams.get('grid') === 'true'
  const limit = searchParams.get('limit') || ITEMS_LIMIT
  const page = searchParams.get('page') || PAGE
  const name = searchParams.get("name");

  const slug = pathname.split('/').pop();
  const decodedSlug = slug ? decodeURIComponent(slug) : '';
  const formattedSlug = formatSlug(decodedSlug);

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value
    router.push(`${pathname}?page=${PAGE}&limit=${newLimit}&list=${list}&grid=${grid}&name=${name}`)
  }

  const handleViewChange = (list: boolean, grid: boolean) => {
    router.push(`${pathname}?page=${page}&limit=${limit}&list=${list}&grid=${grid}&name=${name}`)
  }

  return (
    <div className='h-16 bg-[#F2F3F8] flex items-center justify-between px-4 lg:px-16 lg:mb-10'>
      <div>
        <h2 className='text-2xl text-[#010311] max-sm:hidden'>{formattedSlug === 'Gender' ? 'Gêneros' : formattedSlug}</h2>
        <h2 className='text-2xl text-[#010311] sm:hidden'>{formattedSlug === 'Gender' ? 'Gêneros' : formattedSlug.slice(0, 15) + '...'}</h2>
      </div>
      <div className='flex items-center gap-4 font-bold'>
        <div className='text-xs font-normal flex items-center gap-2'>
          <span>Exibir</span>
          <select
            className='border border-gray-300 rounded px-0 py-1 text-xs font-normal underline outline-none border-none cursor-pointer'
            value={limit}
            onChange={handleLimitChange}
          >
            {ITEMS_LIMIT_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}  
          </select>
          <span className='hidden sm:block'>por vez</span>
        </div>
        <div className='flex gap-1'>
          <AiOutlineMenu
            color={list ? ICON_COLOR.active : ICON_COLOR.inactive}
            size={20}
            onClick={() => handleViewChange(true, false)}
            className='cursor-pointer'
          />
          <IoGridSharp
            color={grid ? ICON_COLOR.active : ICON_COLOR.inactive}
            size={20}
            onClick={() => handleViewChange(false, true)}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default ContainerTitle;