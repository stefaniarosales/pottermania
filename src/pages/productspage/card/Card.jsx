import React from "react"
import { addItem, toggleCart } from "../../../redux/cartSlice"
import { useDispatch, useSelector } from "react-redux"

//styles
import { StyledContainer, StyledTitle, StyledImg, StyledPrice } from "./styledcard"
import { StyledButton } from "../../../components/ui/button/StyledButton"


const Card = ( {image, title, price, id}) => {

    const dispatch = useDispatch()
    const isOpen =  useSelector((state) => state.cart.isOpen)
    console.log("Estado isOpen en Card:", isOpen);

    const handleAddToCart = () => {
        dispatch(addItem({id,title,price}))
        // Solo abrir el carrito si está cerrado
        if(!isOpen) {
            dispatch(toggleCart())
        }
    }

    return (
        <StyledContainer>
            <StyledImg src={image} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <StyledPrice>${price}</StyledPrice>
            <StyledButton className="add-to-cart-btn" onClick={handleAddToCart}>Agregar</StyledButton>
        </StyledContainer>
    )
}

export default Card
