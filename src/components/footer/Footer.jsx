import React from 'react'
//styles
import { StyledContainer, StyledInfo, StyledLogo } from './StyledFooter'

const Footer = () => {
  return (
    <>
      <StyledContainer>
        <StyledLogo src='/img/logo/logoFooter.png'/>
        <StyledInfo>"Desarrollado por Stefania Rosales | Página creada con fines educativos"</StyledInfo>
      </StyledContainer>
    </>
  )
}

export default Footer
