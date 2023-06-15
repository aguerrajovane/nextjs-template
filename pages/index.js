import React from 'react'
import { NextSeo } from 'next-seo';
import Head from 'next/head'

const Home = () => {
  return (
    <> 
      <NextSeo
        title="Nombre de la web"
        description="Descripcion de la web"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Head name="Nombre" />
      <main className="flex flex-col w-full max-w-6xl mx-auto justify-between p-24 sm: py-8 px-4">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Inicio</h1>
          <p className="text-base">Contenido</p>
          </div>
      </main>
    </>
  )
}
export default Home
