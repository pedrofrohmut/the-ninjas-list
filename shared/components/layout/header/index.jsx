import Head from "next/head"

import Navbar from "./navbar"

export default function Header() {
  return (
    <>
      <Head>
        <title>Ninjas</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
    </>
  )
}
