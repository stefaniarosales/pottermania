import styled from "styled-components";

export const StyledContainer = styled.section`
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #131415;
    padding-top: 100px;
    padding: 0 2rem;
    text-align: center;
`;

export const StyledTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
    max-width: 950px;
`;

export const StyledContent = styled.p`
    width: 100%;
    font-size: 16px;
    max-width: 950px;
`;

export const StyledItems = styled.div`
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 60px;
    margin-bottom: 10px;
    max-width: 950px;
`;

export const StyledItem = styled.p`
    font-weight: bold;
    font-size: 14px;
    max-width: 950px;
    @media (max-width: 768px) {
        padding-bottom: 0.5rem;
    }
`;

