
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HarryPotterContainer = styled.div`
  display: inline-block;
  font-size: 3rem;
  font-family: 'helvetica', sans-serif;
  color: red;
  
`;

export const Letter = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

export const Space = styled.span`
  display: inline-block;
  width: 0.5rem; /* Ajusta el tamaño del espacio si es necesario */
`;


