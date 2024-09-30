import styled from 'styled-components';

export const StyledContainerNavbar = styled.nav`
  height: 70px;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  /* Para tablet y desktop, muestra siempre el menú */
  @media (min-width: 768px) {
    
  }
`

export const StyledContainerIconsMenuCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled.img`
  width: 70px;
  height: auto;
  padding-right: 3rem;
`;

export const Styledlinks = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateX(-100%); /* Desplaza el menú completamente fuera de la pantalla hacia la izquierda */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* Aumenta la duración de la transición a 0.5s */

  /* Mostrar el menú en tablet/desktop */
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    opacity: 1;
    transform: translateX(0); /* Para tablet/desktop, sin desplazamiento */
    transition: none; /* Sin animación en tamaños grandes */
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    font-weight: bolder;
    padding: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: red;
    }
  }

  a.active-link {
    color: red; 
    border-bottom: 1px solid red; 
  }


  /* Menú abierto en móvil */
  &.menu-open {
    display: flex;
    justify-content: flex-start;
    padding-top: 2rem;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    flex-direction: column;
    background-color: #fff;
    opacity: 1;
    transform: translateX(0); /* Restablece la posición inicial */
  }
`;


