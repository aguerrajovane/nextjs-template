import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="z-10 border-b border-gray-300 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30 text-sm lg:flex">
      <div className="flex w-full max-w-4xl mx-auto">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="relative dark:invert" />
        </Link>
        <div className="block lg:hidden justify-items-end">
          <button
            className="flex items-center px-3 py-2 rounded text-gray-200 hover:text-white"
            onClick={toggleMenu}
            >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            showMenu ? 'block' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mr-4 lg:mt-0 lg:last:mr-0"
              >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mr-4 lg:mt-0 lg:last:mr-0"
              >
              Servicios
            </Link>
            <Link
              href="/portafolio"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mr-4 lg:mt-0 lg:last:mr-0"
              >
              Portafolio
            </Link>
            <Link
              href="/equipo"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mr-4 lg:mt-0 lg:last:mr-0"
              >
              Equipo
            </Link>
            <Link
              href="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mr-4 lg:mt-0 lg:last:mr-0"
              >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
              >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
