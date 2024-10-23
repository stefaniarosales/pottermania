import React from 'react'
import AboutUs from '../aboutus/AboutUs'
import FeaturedProducts from '../featuredproducts/FeaturedProducts'
import HarryPotterText from './HarryPotterText'
//styles
import { StyledSection, StyledTitle, StyledSubTitle } from '../hero/StyledHero'

function Hero() {
  return (
    <>
      <StyledSection>
        <StyledTitle>Descifra la magia. Explora el mundo de <HarryPotterText/></StyledTitle>
        <StyledSubTitle>
          Explora una amplia selección de productos oficiales, desde varitas y túnicas hasta libros y coleccionables
        </StyledSubTitle>
      </StyledSection>
      <AboutUs/>
      <FeaturedProducts/>
    </>
  )
}

export default Hero
