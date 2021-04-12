import Link from "next/link"
import styled from "styled-components"

export default function Navbar() {
  return (
    <StyledContainer>
      <nav>
        <div className="logo">
          <Link href="/">
            <a>
              <h1>Ninja List</h1>
            </a>
          </Link>
        </div>
        <div className="page-links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/ninjas">
            <a>Ninjas</a>
          </Link>
        </div>
      </nav>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background-color: var(--grey4);

  .logo {
    margin-left: 1rem;
    margin-right: 3rem;
    font-size: 1.4rem;

    h1 {
      color: var(--grey-2);
    }
  }

  nav {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .page-links {
    a {
      font-size: 1.1rem;
      margin-right: 1.2rem;
      color: var(--grey-2);
    }
  }
`
