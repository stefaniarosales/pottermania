import React from 'react'

//styles
import { StyledSection, StyledSubtitle, StyledParrafo } from './StyledAboutUs'

export default function AboutUs() {
  return (
    <>
      <StyledSection>
        <StyledSubtitle>Somos apasionados de Harry Potter y queremos compartir la magia contigo.</StyledSubtitle>
        <StyledParrafo>
          Somos más que una simple tienda de comercio electrónico; somos un portal hacia el mágico mundo de Harry Potter. Creemos en que la magia no solo existe en las páginas de los libros, sino que también se puede encontrar en los productos que ofrecemos.
        </StyledParrafo>
        <StyledParrafo>
          Nuestro equipo está formado por fanáticos apasionados de Harry Potter que se dedican a brindarle todo lo que necesita para abrazar su lado mágico. Ya sea que sea un Gryffindor de corazón, un Slytherin astuto o un Hufflepuff leal, tenemos algo para todos.
        </StyledParrafo>
        <StyledSubtitle>¡Descubre la magia de Harry Potter con nosotros!</StyledSubtitle>
        </StyledSection>
    </>
  )
}
