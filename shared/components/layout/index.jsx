import Header from "./header"
import Footer from "./footer"

import StyledContainer from "./styles"

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </StyledContainer>
  )
}
