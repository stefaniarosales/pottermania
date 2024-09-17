import styled, { keyframes } from 'styled-components';

// Animación para el ícono del carrito
const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const StyledCartButton = styled.button`
  all: unset;
  position: relative;
  background-color: transparent;
  color: #131415;
  cursor: pointer;
  animation: ${({ $isOpen }) => ($isOpen ? bounce : 'none')} 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

// Estilos para mostrar la cantidad de productos en el carrito
export const StyledCartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;