"use client";
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { ITEMS_LIMIT, PAGE } from "@/app/utils/items-limit";

const Search: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const list = searchParams.get("list") || "true";
  const grid = searchParams.get("grid") || "false";
  const limit = searchParams.get("limit") || `${ITEMS_LIMIT}`;

  const [searchTerm, setSearchTerm] = useState(searchParams.get("name") || "");

  useEffect(() => {
    const name = searchParams.get("name");
    if (name === null) {
      setSearchTerm("");
    }
  }, [searchParams])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams({
        page: `${PAGE}`,
        limit,
        list,
        grid,
        name: searchTerm,
      });

      router.replace(`?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquise aqui..."
        className="bg-white w-80 h-8 rounded-2xl border-transparent mt-2 md:mt-0"
        icon={<FiSearch color="#0B1A8E" size={16} />}
        iconPosition="left"
      />
    </>
  );
};

export default Search;
