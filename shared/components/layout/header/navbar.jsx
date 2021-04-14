import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

export default function Navbar() {
  return (
    <StyledContainer>
      <nav>
        <div className="logo">
          <Link href="/">
            <Image className="logo-image" src="/logo.png" height="70" width="116" />
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
  background-color: var(--grey1);

  .logo {
    margin-left: 1rem;
    margin-right: 3rem;
    font-size: 1.4rem;
    padding-top: 4px;
  }

  nav {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .page-links {
    a {
      margin-right: 1.2rem;
      color: var(--grey4);
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
`

const Logo = styled.div`
  
`

const PageLinks = styled.div`
  
`
