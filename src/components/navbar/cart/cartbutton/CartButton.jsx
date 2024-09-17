import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../../../redux/cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StyledCartButton, StyledCartCount } from './styledcartbutton';


const CartButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cart.isOpen)
  const items = useSelector((state) => state.cart.items);

  // Contar la cantidad total de productos en el carrito
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <StyledCartButton onClick={() => dispatch(toggleCart())} isOpen={isOpen}>
    <ShoppingCartIcon sx={{ fontSize: 40 }} />
    {totalItems > 0 && <StyledCartCount>{totalItems}</StyledCartCount>}
  </StyledCartButton>
  );
}; 

export default CartButton;