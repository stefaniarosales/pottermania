import React, { useEffect} from 'react'

import Card from './card/Card'
import Categorys from './categorys/Categorys'

import { useSelector, useDispatch } from 'react-redux'
import { selectCategory, loadMoreProducts } from '../../redux/productsSlice'

//styles
import { StyledSubTitleProducts, StyledSectionContainer, StyledProductsContainer} from './styledproductspage'
import { StyledButton } from '../../components/ui/button/StyledButton'

function ProductsPage() {

  const products = useSelector((state) => state.products.products)
  const category = useSelector((state) => state.products.selectedCategory)
  const visibleProducts = useSelector((state) => state.products.visibleProducts )
  const dispatch = useDispatch()

  //realiza el scroll hasta la parte superior cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  //selecccionar category al hacer click
  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category))
  }

  //filtrado de los products según la category seleccionada
  const filteredProducts = products.filter((product) => {
    return category === 'todos' || product.category === category
  })

  //productos que se muestran de acuerdo al estado visibleProducts
  const displayedProducts = filteredProducts.slice(0, visibleProducts)

  //manejo del btn "Ver más"
  const handleLoadMore = () => {
    dispatch(loadMoreProducts())
  }

  return (
    <>
      <StyledSectionContainer>
        <StyledSubTitleProducts>Tesoros de Hogwarts</StyledSubTitleProducts>
        <Categorys onCategoryClick={handleCategoryClick} />
        <StyledProductsContainer>
          {displayedProducts.map((product) => (
            <Card key={product.id} {...product}/>
          ))}
        </StyledProductsContainer>
        {visibleProducts < filteredProducts.length && (
          <StyledButton onClick={handleLoadMore}>Ver más</StyledButton>
        )}
      </StyledSectionContainer>
    </>
  )
}

export default ProductsPage
