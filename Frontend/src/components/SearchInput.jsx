import { Search } from "lucide-react";
import { useState } from "react";

export const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
      <div className="relative group">

        <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

        <div className="relative flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-2 hover:border-red-600/50 transition-all duration-300 shadow-lg">

          <Search className="ml-3 h-5 w-5 text-neutral-500" />

          <input
            type="text"
            value={query}
            placeholder="Search cases, statutes, or legal topics..."
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-base placeholder-neutral-500"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-2 rounded-xl shadow-[0_0_40px_rgba(188,34,34,0.15)] transition-all duration-300"
          >
            Search
          </button>

        </div>

      </div>
    </form>
  );
};
