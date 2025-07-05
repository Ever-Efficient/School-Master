

import {
  Search,
  ShoppingCart,
  User
} from "lucide-react";

export default function Header() {
  return (
    <div className="">
      <header className="bg-white border-b border-[#e5e7eb] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <img
                src="/src/assets/mainlogo.png"
                alt=""
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-[#0a090a]">
              School Master Store
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#0a090a] hover:text-[#d4af37]">
              Home
            </a>
            <a href="#" className="text-[#64748b] hover:text-[#d4af37]">
              Uniforms
            </a>
            <a href="#" className="text-[#64748b] hover:text-[#d4af37]">
              Accessories
            </a>
            <a href="#" className="text-[#64748b] hover:text-[#d4af37]">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-[#64748b] cursor-pointer hover:text-[#d4af37] " />
            <ShoppingCart className="w-5 h-5 text-[#64748b] cursor-pointer hover:text-[#d4af37] " />
            <User className="w-5 h-5 text-[#64748b] cursor-pointer hover:text-[#d4af37] " />
          </div>
        </div>
      </header>
    </div>
  );
}
