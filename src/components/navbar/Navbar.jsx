import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../redux/menuSlice'


import {
  StyledContainerNavbar,
  StyledContainerIconsMenuCart,
  StyledContainerLogo,
  StyledLogo,
  Styledlinks }
from './stylednavbar'
import BurgerButton from '../navbar/burgerbutton/BurgerButton'
import CartButton from './cart/cartbutton/CartButton'
import Cart from './cart/Cart'

function Navbar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen); // Obtiene el estado del menú desde Redux

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  };

  return (
    <>
      <StyledContainerNavbar>
        <StyledContainerIconsMenuCart>
          <BurgerButton isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
          <CartButton/>
        </StyledContainerIconsMenuCart>

        <Cart/>

        {/* Links que cambian según el estado de isOpen */}
        <Styledlinks className={isOpen ? 'menu-open' : ''}>
          <Link to='/'>Home</Link>
          <Link to='AboutUsPage'>About Us</Link>
          <Link to='ProductsPage'>Products</Link>
          <Link to='ContactFormPage'>Contact</Link>
        </Styledlinks>

        <StyledContainerLogo>
          <StyledLogo src='/img/logo/logoNavbar.png' />
        </StyledContainerLogo>
      </StyledContainerNavbar>
      <Outlet />
    </>
  );
}

export default Navbar;
