import React from 'react'
//styles
import { StyledContainer, StyledInfo, StyledLogo } from './StyledFooter';

const Footer = () => {
  return (
    <>
      <StyledContainer>
        <StyledLogo src='/img/logo/logoFooter.png'/>
        <StyledInfo>Creado por Stefania</StyledInfo>
      </StyledContainer>
    </>
  )
};

export default Footer
