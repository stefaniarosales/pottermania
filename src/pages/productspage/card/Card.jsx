import React from "react"


//styles
import { StyledContainer, StyledTitle, StyledImg, StyledPrice } from "./styledcard"
import { StyledButton } from "../../../components/ui/button/StyledButton"


const Card = ( {image, title, price, id}) => {


    return (
        <StyledContainer>
            <StyledImg src={image} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <StyledPrice>${price}</StyledPrice>
            <StyledButton>Agregar</StyledButton>
        </StyledContainer>
    )
}

export default Card
