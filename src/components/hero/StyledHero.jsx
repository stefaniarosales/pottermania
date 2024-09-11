import styled from "styled-components";

export const StyledSection=styled.section`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 20px;
    padding-top: 70px;

    background-image: url(/img/hero/hero.jpeg);
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
