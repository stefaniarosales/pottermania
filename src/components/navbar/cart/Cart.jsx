import React, { useMemo, useRef, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart, toggleCart} from '../../../redux/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2'
//styles
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

  const [isClickOutside, setIsClickOutside] = useState(false);
  const cartRef = useRef(null)

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }))

    // Configuración del Toast para eliminar un producto
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    // Mostrar el Toast
    Toast.fire({
      icon: 'error',
      title: '¡Producto eliminado!',
    });
  }

  const handleQuantityChange = (id, delta) => {
    setQuantity(id, delta);
  }

  const setQuantity = (id, delta) => {
    const item = items.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity > 0) {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      }
    }
  }

  //borrar todos los productos del carrito
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calcular el total del carrito
  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  // Mostrar modal de éxito al finalizar compra
  const handleFinishPurchase = () => {
    dispatch(clearCart());

    // SweetAlert para mostrar el modal de éxito
    Swal.fire({
      title: '¡Compra realizada con éxito!',
      text: 'Gracias por tu compra',
      icon: 'success',
      timer: 3000, 
      showConfirmButton: false,
    })
  }

  // Cerrar el carrito si se hace clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        dispatch(toggleCart()); // Cierra el carrito si está abierto
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dispatch]);
  useEffect(() => {
    if (isClickOutside && isOpen) {
      dispatch(toggleCart()); // Cierra el carrito
      setIsClickOutside(false); // Resetea el estado para futuras detecciones de clic fuera
    }
  }, [isClickOutside, isOpen, dispatch])

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
            <StyledActionButton onClick={handleFinishPurchase}>Finalizar compra</StyledActionButton>
          </StyledActions>
        </>
      )}
    </StyledContainer>
  )
  )
}

export default Cart
