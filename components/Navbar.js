import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <menu>
            <Link href="/">Inicio</Link>
            <Link href="/contacto">Contacto</Link>
        </menu>
    </nav>
  )
}

export default Navbar
