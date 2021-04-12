import styled from "styled-components"

const StyledContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  h1 {
    padding-bottom: 1.5rem;
    padding-left: 1rem;
  }

  p {
    text-indent: 2rem;
    font-size: 1.1rem;
  }

  .button {
    width: 300px;
    padding 0.8rem 1.6rem;
    background-color: var(--grey3);
    border-radius: 0.2rem;
    color: var(--grey-4);
    text-align: center;
    margin: 1.2rem 0 0 0;
  }
`

export default StyledContainer
