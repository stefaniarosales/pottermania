import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleScrollButton } from '../../redux/scrollSlice'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { StyledScrollButton } from './styledscrollbutton'

const ScrollButton = () => {
  const dispatch = useDispatch();
  const showScrollButton = useSelector((state) => state.scroll.showScrollButton);

  // Manejador para la visibilidad del botón al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        dispatch(toggleScrollButton(true));
      } else {
        dispatch(toggleScrollButton(false));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScrollButton && (
        <StyledScrollButton onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </StyledScrollButton>
      )}
    </>
  );
};

export default ScrollButton;
