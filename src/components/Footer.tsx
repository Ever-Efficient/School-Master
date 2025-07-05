import { Facebook, Instagram, MessageCircle } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#0a090a] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between ">
            <div>
              <h3 className="font-bold mb-4">School Master Store</h3>
              <p className="text-sm text-[#D1D5DB] mb-4">
                Quality school uniforms for Sri Lankan students.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                    School Uniforms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D1D5DB] hover:text-[#d4af37]">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-[#D1D5DB] hover:text-[#d4af37] cursor-pointer" />
                <Instagram className="w-5 h-5 text-[#D1D5DB] hover:text-[#d4af37] cursor-pointer" />
                <MessageCircle className="w-5 h-5 text-[#D1D5DB] hover:text-[#d4af37] cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-t border-[#2c2c2c] mt-8 pt-8 text-center">
            <p className="text-sm text-[#D1D5DB]">
              2025 © All Rights Reserved | School Master Store | Designed &
              Developed by EVER EFFICIENT Business Management (Pvt) Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
