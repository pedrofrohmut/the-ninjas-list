import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import { handleRedirect } from "./functions"
import StyledContainer from "./styles"

export default function NotFound() {
  const router = useRouter()
  useEffect(() => handleRedirect(router), [])
  return (
    <StyledContainer>
      <h1>404 - Oooops...</h1>
      <h2>That page could not be found</h2>
      <p>
        Go back to the
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </StyledContainer>
  )
}
