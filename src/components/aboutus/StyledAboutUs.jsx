import styled from "styled-components";

export const StyledSection=styled.section`
    background-color:#131415;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 20px;
`;

export const StyledSubtitle=styled.h2`
    font-weight: bolder;
    text-align: center;
    font-size:1.5rem;
    max-width: 950px;
`;

export const StyledParrafo=styled.p`
    text-align: center;
    font-weight: lighter;
    font-size: 1rem;
    max-width: 950px;
`;

export const StyledAboutBtn=styled.button`
    width: 200px;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    font-weight: bolder;
`