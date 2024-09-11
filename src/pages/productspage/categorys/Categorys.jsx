import React from "react"

//styles
import { StyledContainerCategorys, StyledCategoryBtn } from "./styledcategorys"

function Categorys() {
  return (
    <>
      <StyledContainerCategorys>
        <StyledCategoryBtn>Todos</StyledCategoryBtn>
        <StyledCategoryBtn>Libros</StyledCategoryBtn>
        <StyledCategoryBtn>Varitas</StyledCategoryBtn>
        <StyledCategoryBtn>Indumentaria</StyledCategoryBtn>
        <StyledCategoryBtn>Accesorios</StyledCategoryBtn>
      </StyledContainerCategorys>
    </>
  )
}

export default Categorys
