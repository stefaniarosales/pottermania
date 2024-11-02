import styled from "styled-components"

export const StyledSubTitleProducts = styled.h2`
  text-align: center;
  font-size: 1.5rem;
`

export const StyledSectionContainer = styled.section`
background-color: #131415;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  padding-top: 100px;
  align-items: center;
`

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 3rem 8rem;
  @media (max-width: 768px) {
        padding: 0;
    }
`

