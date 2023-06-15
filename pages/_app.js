import { DefaultSeo } from 'next-seo';
import Layout from '../components/Layout.js'
import '../app/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <DefaultSeo 
                openGraph={{
                    type: 'website',
                    locale: 'es_PA',
                    url: 'https://www.ejemplo.com/',
                    siteName: 'SiteName',
                  }}
                  twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                  }}
            />
            <Component {...pageProps} />
        </Layout>
    )
  }