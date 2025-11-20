import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";
import { BookOpen, Shield, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Comprehensive Legal Research
            <span className="text-red-600"> Simplified</span>
          </h2>

          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Access millions of case laws, statutes, and legal documents — fast, accurate, and reliable.
          </p>

          <div className="pt-6">
            <SearchInput />
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-neutral-500">
            <span>Popular searches:</span>
            <button className="hover:text-red-600 transition-all duration-300">Contract Law</button>
            <span>•</span>
            <button className="hover:text-red-600 transition-all duration-300">Criminal Appeals</button>
            <span>•</span>
            <button className="hover:text-red-600 transition-all duration-300">Civil Rights</button>
          </div>
        </div>

      </main>


      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">© 2025 Case Library. All rights reserved.</p>

          <div className="flex gap-8 text-neutral-500">
            <a className="hover:text-white transition-all duration-300" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-all duration-300" href="#">Terms of Service</a>
            <a className="hover:text-white transition-all duration-300" href="#">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
