import React from 'react'

//styles
import { 
  StyledContainer,
  StyledContent,
  StyledItems,
  StyledItem, 
  StyledTitle 
} from './StyledAboutUsPage'

//icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import HttpsIcon from '@mui/icons-material/Https'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

function AboutUsPage() {
  return (
    <>
      <StyledContainer>
        <StyledTitle>Bienvenido a la Tienda Mágica de Harry Potter</StyledTitle>
        <StyledContent>
          Somos una tienda online especializada en todo lo relacionado con el mundo mágico de Harry Potter. 
        </StyledContent>
        <StyledContent>
        Encontrarás desde varitas y escobas hasta ropa, accesorios y objetos decorativos para tu hogar. 
        </StyledContent>
        <StyledContent>
        Nuestro objetivo es que todos los fans de Harry Potter puedan encontrar los productos perfectos para expresar su amor por la saga.
        </StyledContent>

        <StyledItems>
          <StyledItem>
            Envío gratuito a partir de $50.000 en compras. <LocalShippingIcon/>
          </StyledItem>

          <StyledItem>
            Aceptamos todas las tarjetas de crédito y débito, PayPal y Mercado Pago. <HttpsIcon/>
          </StyledItem>

          <StyledItem>
            Estamos disponibles para ayudarte con cualquier duda o problema que tengas. <LocalPhoneIcon/>
          </StyledItem>

        </StyledItems>
      </StyledContainer>
    </>
  )
}

export default AboutUsPage
