import React from "react"
import { addItem, toggleCart } from "../../../redux/cartSlice"
import { useDispatch } from "react-redux"

//styles
import { StyledContainer, StyledTitle, StyledImg, StyledPrice } from "./styledcard"
import { StyledButton } from "../../../components/ui/button/StyledButton"


const Card = ( {image, title, price, id}) => {

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItem({id,title,price}))
        dispatch(toggleCart()) //abre o cierra el carrito al hacer click en agregar.
      }


    return (
        <StyledContainer>
            <StyledImg src={image} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <StyledPrice>${price}</StyledPrice>
            <StyledButton onClick={handleAddToCart}>Agregar</StyledButton>
        </StyledContainer>
    )
}

export default Card
