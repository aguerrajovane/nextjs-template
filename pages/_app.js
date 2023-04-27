import Layout from '../components/Layout.js'
import '../app/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
  }