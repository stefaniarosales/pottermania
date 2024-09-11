import styled from "styled-components"

export const StyledContainer = styled.div`
    width:250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const StyledImg = styled.img`
    width: 250px;
    height: 350px;
    object-fit: contain;
    margin-bottom: 16px;
`

export const StyledTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`

export const StyledPrice = styled.p`
    font-size: 16px;
`
