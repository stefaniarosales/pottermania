// NoPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoPage = () => {
  return (
    <Container>
      <Content>
        <StyledLink to="/">Volver a la página principal</StyledLink>
      </Content>
    </Container>
  );
};

export default NoPage;

// Estilos con styled-components
const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 120px;
  padding-right: 22px;
  height: 100vh;
  background-image: url(../../public/img/nopage/nopage4.jpg);
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
    font-size: 1rem;
    padding: 10px;
    border-radius: 5px;
    background-color: #f5f5f5;
    border: none;
    outline: 1px black solid;
    color: #000;
    cursor: pointer;
    font-weight: bolder;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #131415;
      color: white;
    }
`;
