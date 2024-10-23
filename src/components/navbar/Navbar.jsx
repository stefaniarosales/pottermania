import React, { useEffect, useRef} from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu, closeMenu } from '../../redux/menuSlice'
//styles
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
  const menuRef = useRef(null) // Ref para el área del menú
  const buttonRef = useRef(null) // Ref para el botón del menú
  const location = useLocation() // Obtener la ruta actual

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica si el clic es fuera del área del menú y fuera del botón de menú
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        dispatch(closeMenu());
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, dispatch])

  return (
    <>
      <StyledContainerNavbar >
        <StyledContainerIconsMenuCart>
          <div ref={buttonRef}>
            <BurgerButton isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
          </div>
          <CartButton/>
        </StyledContainerIconsMenuCart>

        <Cart/>

        {/* Links que cambian según el estado de isOpen */}
        <Styledlinks ref={menuRef} className={isOpen ? 'menu-open' : ''}>
        <Link to='/' className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
          <Link to='/AboutUsPage' className={location.pathname === '/AboutUsPage' ? 'active-link' : ''}>About Us</Link>
          <Link to='/ProductsPage' className={location.pathname === '/ProductsPage' ? 'active-link' : ''}>Products</Link>
          <Link to='/ContactFormPage' className={location.pathname === '/ContactFormPage' ? 'active-link' : ''}>Contact</Link>
        </Styledlinks>

        <StyledContainerLogo>
          <StyledLogo src='/img/logo/logoNavbar.png' />
        </StyledContainerLogo>
      </StyledContainerNavbar>
      <Outlet />
    </>
  );
}

export default Navbar
