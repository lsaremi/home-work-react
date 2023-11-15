import { useState, useEffect } from "react";

export const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    const delayFn = setTimeout(() => {
      onSearch(city);
    }, 1000);

    return () => clearTimeout(delayFn);
  }, [city, onSearch]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="px-6 flex items-center justify-center py-10 w-full">
      <input
        onChange={handleInputChange}
        placeholder="search city"
        className="bg-transparent border border-[#E7E7E7] rounded-2xl px-6 py-3 w-[90%] outline-none text-[#E7E7E7]"
      />
    </div>
  );
};
