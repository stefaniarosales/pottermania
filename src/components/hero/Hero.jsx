import React from 'react'
import { Link } from 'react-router-dom';
import AboutUs from '../aboutus/AboutUs'
import FeaturedProducts from '../featuredproducts/FeaturedProducts'
import HarryPotterText from './HarryPotterText'
//styles
import { StyledSection, StyledTitle, StyledSubTitle} from '../hero/StyledHero'
import { StyledButton } from '../ui/button/StyledButton';

function Hero() {
  return (
    <>
      <StyledSection>
        <StyledTitle>Descifra la magia. Explora el mundo de <HarryPotterText/></StyledTitle>
        <StyledSubTitle>
          Explora una amplia selección de productos oficiales, desde varitas y túnicas hasta libros y coleccionables
        </StyledSubTitle>
        <Link to="/ProductsPage">
          <StyledButton width="200px">¡Descúbrelo ahora!</StyledButton>
        </Link>
      </StyledSection>
      <AboutUs/>
      <FeaturedProducts/>
    </>
  )
}

export default Hero
