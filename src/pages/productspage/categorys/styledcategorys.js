import styled from "styled-components"

export const StyledContainerCategorys = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
`

export const StyledCategoryBtn = styled.button`
    width: 150px;
    height: 45px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
    margin: 0 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    background-color: ${({ isSelected }) => (isSelected ? "#86818a" : "#fff")};
    color: ${({ isSelected }) => (isSelected ? "#fff" : "#333")};
   /*  border: 2px solid ${({ isSelected }) => (isSelected ? 'red' : '#131415')}; */

    &:hover {
        color: white;
        background-color: #86818a;
    }

    @media (max-width: 768px) {
        width: 120px;
        padding: 0.5rem;
        margin: 0;
    }
`