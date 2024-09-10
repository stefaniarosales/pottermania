import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/menuSlice';  // Importa la acción de toggle

import {StyledContainerNavbar, StyledContainerLogo, StyledLogo, Styledlinks} from './styledNavbar';
import BurgerButton from '../navbar/burgerbutton/BurgerButton';

function Navbar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen); // Obtiene el estado del menú desde Redux

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <StyledContainerNavbar>

        <BurgerButton isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
        <StyledContainerLogo>
          <StyledLogo src='public/img/logo/logoNavbar.png' />
        </StyledContainerLogo>

        

        {/* Links que cambian según el estado de isOpen */}
        <Styledlinks className={isOpen ? 'menu-open' : ''}>
          <Link to='/'>Home</Link>
          <Link to='AboutUsPage'>About Us</Link>
          <Link to='ProductsPage'>Products</Link>
          <Link to='ContactPage'>Contact</Link>
        </Styledlinks>
      </StyledContainerNavbar>
      <Outlet />
    </>
  );
}

export default Navbar;
