import React from "react"
//styles
import { StyledContainerCategorys, StyledCategoryBtn } from "./styledcategorys"

function Categorys({onCategoryClick, selectedCategory}) {
  return (
    <>
      <StyledContainerCategorys>
      <StyledCategoryBtn
        onClick={() => onCategoryClick('todos')}
        isSelected={selectedCategory === 'todos'}>
        Todos
      </StyledCategoryBtn>
      <StyledCategoryBtn
        onClick={() => onCategoryClick('libros')}
        isSelected={selectedCategory === 'libros'}>
        Libros
      </StyledCategoryBtn>
      <StyledCategoryBtn
        onClick={() => onCategoryClick('varitas')}
        isSelected={selectedCategory === 'varitas'}>
        Varitas
      </StyledCategoryBtn>
      <StyledCategoryBtn
        onClick={() => onCategoryClick('indumentaria')}
        isSelected={selectedCategory === 'indumentaria'}>
        Indumentaria
      </StyledCategoryBtn>
      <StyledCategoryBtn
        onClick={() => onCategoryClick('accesorios')}
        isSelected={selectedCategory === 'accesorios'}>
        Accesorios
      </StyledCategoryBtn>
      </StyledContainerCategorys>
    </>
  )
}

export default Categorys
