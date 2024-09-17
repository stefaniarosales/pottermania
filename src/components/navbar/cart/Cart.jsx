import React, { useMemo, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart, closeCart } from '../../../redux/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  StyledContainer,
  StyledSubtitleCart,
  StyledItemsList,
  StyledItem,
  StyledItemDetails,
  StyledItemTitle,
  StyledItemPrice,
  StyledItemQuantity,
  StyledQuantityButton,
  StyledItemRemoveButton,
  StyledActions,
  StyledActionButton,
  StyledTotal,
} from './styledcart'

const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  const isOpen = useSelector((state) => state.cart.isOpen)
  const dispatch = useDispatch()
  const cartRef = useRef(null)

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }))
  };

  const handleQuantityChange = (id, delta) => {
    setQuantity(id, delta);
  };

  const setQuantity = (id, delta) => {
    const item = items.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity > 0) {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      }
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calcular el total del carrito
  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  // Cerrar el carrito si se hace clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        dispatch(closeCart())
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, dispatch]);

  return (
  isOpen && (
    <StyledContainer ref={cartRef}>
      {items.length === 0 ? (<p>Carrito vacio</p>) 
      :(
        <>
          <StyledSubtitleCart>Tus Compras </StyledSubtitleCart>
          <StyledItemsList>
            {items.map(item => (
              <StyledItem key={item.id}>
                <StyledItemDetails>
                  <StyledItemTitle>{item.title}</StyledItemTitle>
                  <StyledItemPrice>${item.price}</StyledItemPrice>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StyledQuantityButton onClick={() => handleQuantityChange(item.id,-1)}>-</StyledQuantityButton>
                    <StyledItemQuantity
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <StyledQuantityButton onClick={() => handleQuantityChange(item.id, 1)}>+</StyledQuantityButton>
                  </div>
                </StyledItemDetails>

                <StyledItemRemoveButton onClick={() => handleRemoveItem(item.id)}>
                  <DeleteIcon />
                </StyledItemRemoveButton>
              </StyledItem>
            ))}
          </StyledItemsList>
          <StyledTotal>Total: ${totalPrice.toFixed(2)}</StyledTotal>
          <StyledActions>
            <StyledActionButton onClick={handleClearCart}>Borrar productos</StyledActionButton>
            <StyledActionButton>Finalizar compra</StyledActionButton>
          </StyledActions>
        </>
      )}
    </StyledContainer>
  )
  );
};

export default Cart;
