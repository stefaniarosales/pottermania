import React from 'react'

import AboutUs from '../aboutus/AboutUs'

//styles
import { StyledSection, StyledTitle, StyledSubTitle } from '../hero/StyledHero'
import Button from '../ui/button/Button'

function Hero() {
  return (
    <>
      <StyledSection>
        <StyledTitle>Descifra la magia. Explora el mundo de Harry Potter</StyledTitle>
        <StyledSubTitle>
          Explora una amplia selección de productos oficiales, desde varitas y túnicas hasta libros y coleccionables
        </StyledSubTitle>
        <Button>
          Descubre más
        </Button>
      </StyledSection>
      <AboutUs/>
    </>
  )
}

export default Hero
