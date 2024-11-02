import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../../../redux/cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//styles
import { StyledCartButton, StyledCartCount } from './styledcartbutton';

// forwardRef para recibir la referencia del padre
const CartButton = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cart.isOpen);
  const items = useSelector((state) => state.cart.items);

  // Contar la cantidad total de productos en el carrito
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <StyledCartButton
      onClick={(event) => {
        event.stopPropagation(); // Evita la propagación del click al documento
        handleToggleCart();
      }}
      ref={ref} // Usar la referencia pasada
      $isOpen={isOpen}
    >
      <ShoppingCartIcon sx={{ fontSize: 40 }} />
      {totalItems > 0 && <StyledCartCount>{totalItems}</StyledCartCount>}
    </StyledCartButton>
  );
});

export default CartButton;
  