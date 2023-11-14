import React from "react";

export const Search = () => {
  return (
    <div className="px-6 flex items-center justify-center py-10 w-full">
      <input
        placeholder="search city"
        className="bg-transparent border border-[#E7E7E7] rounded-2xl px-6 py-3 w-[90%] outline-none text-[#E7E7E7]"
      />
    </div>
  );
};
