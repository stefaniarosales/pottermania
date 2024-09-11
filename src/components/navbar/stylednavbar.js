import styled from 'styled-components';

export const StyledContainerNavbar = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

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
    justify-content: center;
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    flex-direction: column;
    background-color: #fff;
  }
  
`;


