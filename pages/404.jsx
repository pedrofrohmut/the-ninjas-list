import Link from "next/link"
import styled from "styled-components"

export default function NotFound() {
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

const StyledContainer = styled.div`
  text-align: center;

  h2 {
    font-size: 1.3rem;
  }

  a {
    margin-left: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.8px;
  }
`
