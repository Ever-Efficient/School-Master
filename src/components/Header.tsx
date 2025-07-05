import  { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import mainlogo from "../assets/mainlogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white border-b border-[#e5e7eb] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/">
            <img
              src={mainlogo}
              alt="Logo"
              className="h-8 w-auto object-cover"
            /> </Link>
            <Link to="/admin" className="font-semibold text-[#0a090a] text-sm sm:text-base">
              School Master Store
            </Link>
           
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#" className="text-[#0a090a] hover:text-[#d4af37]">
              Home
            </Link>
            <Link to="#" className="text-[#64748b] hover:text-[#d4af37]">
              Uniforms
            </Link>
            <Link to="#" className="text-[#64748b] hover:text-[#d4af37]">
              Accessories
            </Link>
            <Link to="#" className="text-[#64748b] hover:text-[#d4af37]">
              Contact
            </Link>
          </nav>

          {/* Icons + Hamburger */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Search className="w-5 h-5 text-[#64748b] cursor-pointer hover:text-[#d4af37]" />
            <ShoppingCart className="w-5 h-5 text-[#64748b] cursor-pointer hover:text-[#d4af37]" />
            <User className="w-5 h-5 text-[#64748b] cursor-pointer hover:text-[#d4af37]" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0a090a]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0a090a]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 space-y-2 px-4">
            <Link to="/" className="block text-[#0a090a] hover:text-[#d4af37]">
              Home
            </Link>
            <Link to="/" className="block text-[#64748b] hover:text-[#d4af37]">
              Uniforms
            </Link>
            <Link to="/" className="block text-[#64748b] hover:text-[#d4af37]">
              Accessories
            </Link>
            <Link to="/" className="block text-[#64748b] hover:text-[#d4af37]">
              Contact
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
