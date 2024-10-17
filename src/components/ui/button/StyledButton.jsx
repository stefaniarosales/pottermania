import styled from "styled-components";


export const StyledButton = styled.button`
   width: 150px;
   height: 50px;
   padding: 10px;
   border-radius: 5px;
   background-color: #f5f5f5;
   border: none;
   outline: 1px black solid;
   color: #000;
   cursor: pointer;
   transition: background-color 0.3s ease, color 0.3s ease;

   &:hover {
      background-color: #131415;
      color: white;
   }
`
