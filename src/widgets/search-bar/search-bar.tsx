"use client";
import { useState } from "react";

export const SearchBar = () => {
  const [value, setValue] = useState<string>();

  return (
    <input
      value={value}
      type="text"
      placeholder="Search..."
      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
