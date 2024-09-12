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
    justify-content: space-between;
  }
`;

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

  /* Mostrar el menú en tablet/desktop */
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding-right: 3rem;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    font-weight: bolder;
    padding: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #86818a;
    }
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
  }
  
`;


