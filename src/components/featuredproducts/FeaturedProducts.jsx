import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../../pages/productspage/card/Card'
import { setFeaturedProducts } from '../../redux/featuredproductsSlice'

//styles
import { StyledProductsContainer, StyledSectionContainer, StyledSubTitleProducts, StyledSeeAllProductsBtn } from './styledfeaturedproducts'



function FeaturedProducts() {
  const dispatch = useDispatch()
  const featuredProducts = useSelector( (state) => state.featuredProducts.featuredProducts)

  //dispara la acción para generar los productos destacados al azar
  useEffect(() => {
    dispatch(setFeaturedProducts())
  }, [dispatch])

  return (
    <>
      <StyledSectionContainer>
      <StyledSubTitleProducts>Productos Destacados</StyledSubTitleProducts>
      <StyledProductsContainer>
        {featuredProducts.map(product => (
          <Card 
            key={product.id} 
            image={product.image} 
            title={product.title} 
            price={product.price} 
            id={product.id} 
          />
        ))}
      </StyledProductsContainer>
      <Link to='/ProductsPage'>
        <StyledSeeAllProductsBtn>Ver todos</StyledSeeAllProductsBtn>
      </Link>
    </StyledSectionContainer>
    </>
  )
}

export default FeaturedProducts
