import { Scale } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/10 rounded-xl">
              <Scale className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Case Library</h1>
              <p className="text-xs text-neutral-400">Legal Research Platform</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm text-neutral-400 hover:text-white transition-all duration-300" href="#">
              Database
            </a>
            <a className="text-sm text-neutral-400 hover:text-white transition-all duration-300" href="#">
              Resources
            </a>
            <a className="text-sm text-neutral-400 hover:text-white transition-all duration-300" href="#">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
