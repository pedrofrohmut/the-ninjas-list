import styled from "styled-components"

const StyledContainer = styled.div`
  padding: 1rem;

  h1 {
    text-align: center;
  }

  a.single {
    color: var(--grey3);
    padding: 0.2rem 1rem;
    background-color: var(--grey-2);
    display: block;
    margin: 1.5rem 1rem;
    border-left: 8px solid var(--grey2);

    &:hover {
      border-left-color: var(--grey-3);
    }
  }
`

export default StyledContainer
