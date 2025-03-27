"use client";
import { useState, useEffect } from "react";
import { useSidebarStore } from "@/app/constants/useSidebarStore";
import { useFavoriteStore } from "@/app/constants/useFavoriteStore";
import Image from "next/image";
import Favorite from "@/app/gender/[slug]/components/favorite";

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { favorites, loadFavorites } = useFavoriteStore();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      loadFavorites();
    }
  }, [isOpen, loadFavorites]);

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div
          className={"fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity duration-300 z-20 top-[40px] lg:top-[64px]"}
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed right-0 w-80 lg:w-96 h-[calc(100vh-36px)] lg:h-[calc(100vh-64px)] bg-white text-black shadow-lg
        transform ${isOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-300 top-[40px] lg:top-[64px] border-t-[6px] border-[#0B1A8E] z-30`}
      >
        <div className="p-5">
          <h2 className="text-lg font-bold mb-3 text-[#0B1A8E]">Favoritos</h2>

          {favorites.length > 0 ? (
            <div className="max-h-[80vh] overflow-y-auto pr-1">
              <ul className="space-y-2">
                {favorites.map((book) => (
                  <li key={book.primary_isbn10} className="py-2 flex gap-4">
                    <Image src={book.book_image} alt={book.title} width={50} height={50} />
                    <div className="gap-1">
                      <h4 className="text-sm font-bold text-[#0E1337]">{book.title}</h4>
                      <div className="flex items-center gap-1">
                        <p className="text-xs text-[#454A67] font-normal">{book.contributor}</p>
                        <Favorite item={book} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-[#454A67]">Nenhum favorito adicionado.</p>
          )}
        </div>
      </div>
    </>
  );
}
