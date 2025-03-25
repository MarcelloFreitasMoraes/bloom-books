"use client";
import { useSidebarStore } from "@/app/constants/useSidebarStore";

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity duration-300 z-20 top-[96px] lg:top-[64px]"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed right-0 w-96 h-[calc(100vh-96px)] lg:h-[calc(100vh-64px)] bg-white text-black shadow-lg
        transform ${isOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-300 top-[96px] lg:top-[64px] border-t-[6px] border-[#0B1A8E] z-30`}
      >
        <div className="p-5">
          <h2 className="text-lg font-bold">Sidebar</h2>
          <p>Conteúdo aqui...</p>
        </div>
      </div>
    </>
  );
}
