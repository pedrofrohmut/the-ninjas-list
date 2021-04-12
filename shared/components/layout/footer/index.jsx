import styled from "styled-components"

export default function Footer() {
  return (
    <StyledContainer>
      Copyright 2021 Ninja List
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: block;
  text-align: center;
  padding: 16px 0;
  color: var(--grey-2);
  background-color: var(--grey3);
  opacity: 0.75;

  margin-top: auto;
`
