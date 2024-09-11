import styled from 'styled-components';

export const StyledBurgerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* Ocultar el botón en tablet y desktop */
  @media (min-width: 768px) {
    display: none;
  }

  svg {
    width: 60px;
    height: 60px;
  }

  .line {
    fill: none;
    stroke: #000;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
    stroke-dasharray: 60 207;
  }

  .line2 {
    stroke-dasharray: 60 60;
  }

  .line3 {
    stroke-dasharray: 60 207;
  }

  &.opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
  }

  &.opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
  }

  &.opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
  }
`;