import styled from "styled-components";

export const StyledSection=styled.section`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 20px;

    background-image: url(../public/img/hero/hero.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

`;

export const StyledTitle=styled.h1`
    font-size: 2rem;
    text-align: center;
    max-width: 950px;
`;

export const StyledSubTitle=styled.h2`
    font-weight: lighter;
    font-size: 1rem;
    text-align: center;
    max-width: 950px;
`;
