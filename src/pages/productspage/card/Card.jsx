import React from "react"
import { addItem, toggleCart } from "../../../redux/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"

//styles
import { StyledContainer, StyledTitle, StyledImg, StyledPrice } from "./styledcard"
import { StyledButton } from "../../../components/ui/button/StyledButton"

const Card = ( {image, title, price, id}) => {

    const dispatch = useDispatch()

    const handleAddToCart = () => {

        dispatch(addItem({id,title,price}))

         // Configuración del Toast
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
                }
            })
        // Mostrar el Toast
        Toast.fire({
            icon: "success",
            title: "¡Producto agregado!"
        })
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
