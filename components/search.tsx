"use client";

import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";

const Search: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const list = searchParams.get("list") || "true";
  const grid = searchParams.get("grid") || "false";
  const limit = searchParams.get("limit") || "5";

  const [searchTerm, setSearchTerm] = useState(searchParams.get("name") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams({
        page: "1",
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
    <Input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for books"
      className="bg-white w-80 h-8 rounded-2xl border-transparent mt-2 md:mt-0"
      icon={<IoSearchSharp />}
      iconPosition="left"
    />
  );
};

export default Search;
