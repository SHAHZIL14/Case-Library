import  Header  from "../components/Header";
import  SearchInput  from "../components/SearchInput";
import  SearchResults  from "../components/searchResult";
import { useState } from "react";

function Index() {
  const [query, setQuery] = useState("");
  const [mainQuery, setMainQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setMainQuery(query);
    setResult([]);

    try {
      const response = await fetch(
        `http://localhost:8000/search?keyword=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setResult(data.results || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Assignment Project 
            <span className="text-red-600"> #1</span>
          </h2>

          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Access millions of case laws, statutes, and legal documents — fast,
            accurate, and reliable.
          </p>

          <div className="pt-6">
            <SearchInput
              query={query}
              setQuery={setQuery}
              setMainQuery={setMainQuery}
              handleSearch={handleSearch}
              isSearching={isSearching}
            />
          </div>

          {isSearching ? (
            <div className="pt-10 text-neutral-500">Searching...</div>
          ) : result.length === 0 && mainQuery === "" ? (
            <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-neutral-500">
              <span>Popular searches:</span>
              <button className="hover:text-red-600 transition-all duration-300">
                Contract Law
              </button>
              <span>•</span>
              <button className="hover:text-red-600 transition-all duration-300">
                Criminal Appeals
              </button>
              <span>•</span>
              <button className="hover:text-red-600 transition-all duration-300">
                Civil Rights
              </button>
            </div>
          ) : (
            <SearchResults results={result} />
          )}
        </div>
      </main>

      <footer className="border-t border-neutral-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © 2025 Case Library. All rights reserved.
          </p>

          <div className="flex gap-8 text-neutral-500">
            <a className="hover:text-white transition-all duration-300" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-all duration-300" href="#">
              Terms of Service
            </a>
            <a className="hover:text-white transition-all duration-300" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
