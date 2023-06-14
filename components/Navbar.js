import React, { useState } from 'react';
import Link from 'next/link';
import ButtonPrimary from './ButtonPrimary';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="z-10 border-b border-gray-300 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30 text-sm lg:flex">
      <div className="flex w-full max-w-6xl mx-auto items-center justify-between">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="relative dark:invert mx-3 h-4 lg:h-6" />
        </Link>
        <div className="block lg:hidden justify-items-end">
          <button
            className="flex items-center px-3 py-2 rounded"
            onClick={toggleMenu}
            >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="<http://www.w3.org/2000/svg>"
              >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full hidden block lg:flex lg:items-center lg:w-auto"
          >
          <div className="text-sm lg:justify-end">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 hover:border-b ml-2 p-2"
              >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="block mt-4 lg:inline-block lg:mt-0 hover:border-b ml-2 p-2"
              >
              Servicios
            </Link>
            <Link
              href="/portafolio"
              className="block mt-4 lg:inline-block lg:mt-0 hover:border-b ml-2 p-2"
              >
              Portafolio
            </Link>
            <Link
              href="/equipo"
              className="block mt-4 lg:inline-block lg:mt-0 hover:border-b ml-2 p-2"
              >
              Equipo
            </Link>
            <Link
              href="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 hover:border-b ml-2 p-2"
              >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="block mt-4 lg:inline-block lg:mt-0 lg:px-2 lg:mt-0 lg:last:ml-0"
              >
                <ButtonPrimary>Contacto</ButtonPrimary>
            </Link>
          </div>
        </div>
      </div>
      {/*  Mobile menu */}
      <div
          className={`${
            showMenu ? 'block' : 'hidden'
          } w-full block lg:hidden lg:flex lg:items-center lg:w-auto`}
          >
          <div className="text-sm">
            <Link
              href="/"
              className="block text-center mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="block text-center mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Servicios
            </Link>
            <Link
              href="/portafolio"
              className="block text-center mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Portafolio
            </Link>
            <Link
              href="/equipo"
              className="block text-center mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Equipo
            </Link>
            <Link
              href="/blog"
              className="block text-center mt-6 lg:inline-block lg:mt-0 lg:ml-4 lg:pr-4 lg:mt-0 lg:last:ml-0"
              >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="block text-center mt-6 lg:inline-block lg:mt-0 lg:px-2 lg:mt-0 lg:last:ml-0"
              >
                <ButtonPrimary>Contacto</ButtonPrimary>
            </Link>
          </div>
        </div>
    </nav>
    
  );
}

export default Navbar;
