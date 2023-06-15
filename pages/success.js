import React from 'react'
import Link from 'next/link'

const success = () => {
  return (
      <main className="flex flex-col items-center justify-between p-24 ">
        <div className="min-h-screen text-center">
            <h1 className="text-xl font-bold mb-4">¡Hemos recibido tu información!</h1>
            <p>Gracias por contactarnos. Haz clic <Link href="/" className="underline underline-offset-4">aquí</Link> para volver al inicio.</p>
        </div>
      </main>
  )
}

export default success
