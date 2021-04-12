import Layout from "../shared/components/layout"

import "../shared/styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
