import React from "react"

//styles
import { StyledContainerCategorys, StyledCategoryBtn } from "./styledcategorys"

function Categorys({onCategoryClick}) {
  return (
    <>
      <StyledContainerCategorys>
        <StyledCategoryBtn onClick={ () => onCategoryClick('todos')}>Todos</StyledCategoryBtn>
        <StyledCategoryBtn onClick={ () => onCategoryClick('libros')}>Libros</StyledCategoryBtn>
        <StyledCategoryBtn onClick={ () => onCategoryClick('varitas')}>Varitas</StyledCategoryBtn>
        <StyledCategoryBtn onClick={ () => onCategoryClick('indumentaria')}>Indumentaria</StyledCategoryBtn>
        <StyledCategoryBtn onClick={ () => onCategoryClick('accesorios')}>Accesorios</StyledCategoryBtn>
      </StyledContainerCategorys>
    </>
  )
}

export default Categorys
