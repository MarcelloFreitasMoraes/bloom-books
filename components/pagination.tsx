'use client'
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const list = searchParams.get('list') || true
    const grid = searchParams.get('grid') || false
    const limit = searchParams.get('limit') || 5
    const name = searchParams.get('name') || ''

    const pagesToShow = 6;
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    return (
        <div className="flex items-center justify-center gap-2 mt-5">
            <Button
                variant="outline"
                className={`px-3 lg:px-4 py-2 border border-[#1F2445] rounded-xl cursor-pointer ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                disabled={currentPage === 1}
                onClick={() => {
                    if (currentPage > 1) {
                        router.push(`${pathname}?page=${currentPage - 1}&limit=${limit}&list=${list}&grid=${grid}&name=${name}`); // Add name to the query string
                    }
                }}
            >
               <MdKeyboardArrowLeft />
            </Button>

            {visiblePages.map((pageNumber) => (
                <Link
                    key={pageNumber}
                    href={`${pathname}?page=${pageNumber}&limit=${limit}&list=${list}&grid=${grid}&name=${name}`}
                    className="px-3 lg:px-4 py-2 border border-[#1F2445] rounded-xl font-bold text-xs"
                    style={currentPage === pageNumber ? { backgroundColor: "#1F2445", color: "white" } : { backgroundColor: "white", color: "#1F2445" }}
                >
                    {pageNumber}
                </Link>
            ))}

            <Button
                variant="outline"
                className={`px-3 lg:px-4 py-2 border border-[#1F2445] rounded-xl cursor-pointer ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                disabled={currentPage === totalPages}
                onClick={() => {
                    if (currentPage < totalPages) {
                        router.push(`${pathname}?page=${currentPage + 1}&limit=${limit}&list=${list}&grid=${grid}&name=${name}`);
                    }
                }}
            >
              <MdKeyboardArrowRight />
            </Button>
        </div>
    )
}

export default Pagination;