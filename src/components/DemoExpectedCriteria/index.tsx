'use client';

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white"></Link>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}></button>

      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-black bg-opacity-80">
          <Link href="/" className="block text-red py-2">Home</Link>
          <Link href="/about" className="block text-white py-2">About</Link>
          <Link href="/game" className="block text-white py-2">Game</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
