'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoGridSharp } from 'react-icons/io5';

const ContainerTitle: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const list = searchParams.get('list') === 'true'
  const grid = searchParams.get('grid') === 'true'
  const limit = searchParams.get('limit') || 5
  const page = searchParams.get('page') || 1

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value
    router.push(`${pathname}?page=${page}&limit=${newLimit}&list=${list}&grid=${grid}`)
  }

  return (
    <div className='h-16 bg-[#F2F3F8] flex items-center justify-between px-4 lg:px-16 lg:mb-10'>
      <div>
        <h2 className='text-2xl text-[#010311]'>Gêneros</h2>
      </div>
      <div className='flex items-center gap-4 font-bold'>
        <div className='text-xs font-normal flex items-center gap-2'>
          <span>Exibir</span>
          <select
            className='border border-gray-300 rounded px-0 py-1 text-xs font-normal underline outline-none border-none cursor-pointer'
            value={limit}
            onChange={handleLimitChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <span className='hidden sm:block'>por vez</span>
        </div>
        <div className='flex gap-1'>
          <AiOutlineMenu
            color={list ? '#5062F0' : '#D0D3E2'}
            size={20}
            onClick={() => router.push(`${pathname}?page=${page}&limit=${limit}&list=true&grid=false`)}
            className='cursor-pointer'
          />
          <IoGridSharp
            color={grid ? '#5062F0' : '#D0D3E2'}
            size={20}
            onClick={() => router.push(`${pathname}?page=${page}&limit=${limit}&list=false&grid=true`)}
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default ContainerTitle;