import React from 'react'

import { productsforsale } from '../../data/products'
import Card from './card/Card'
import Categorys from './categorys/Categorys'

//styles
import { StyledSubTitleProducts, StyledSectionContainer, StyledProductsContainer} from './styledproductspage'

function ProductsPage() {
  return (
    <>
      <StyledSectionContainer>
        <StyledSubTitleProducts>Tesoros de Hogwarts</StyledSubTitleProducts>
        <Categorys />
        <StyledProductsContainer>
          <Card key={productsforsale.id} {...productsforsale}/>
        </StyledProductsContainer>
      </StyledSectionContainer>
    </>
  )
}

export default ProductsPage
