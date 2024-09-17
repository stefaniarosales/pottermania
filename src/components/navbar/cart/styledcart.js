import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 100px;
  width: 50%;
  left: 0;
  padding: 20px;
  background-color: #fff;
  position: absolute;
  z-index: 1000;
`;

export const StyledSubtitleCart = styled.h2`
  color: #495057;
`

export const StyledItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px; /* Limitar la altura del contenedor */
  overflow-y: auto;  /* Habilitar el scroll vertical si es necesario */
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 20px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #dee2e6;
`;

export const StyledItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledItemTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #495057;
`;

export const StyledItemPrice = styled.p`
  margin: 5px 0;
  color: #6c757d;
`;

export const StyledItemQuantity = styled.input`
  width: 50px;
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  text-align: center;
  margin: 0 10px;
`;

export const StyledQuantityButton = styled.button`
  background-color: #131415;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #63666a;
  }
`;

export const StyledItemRemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #63666a;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 20px;
`;

export const StyledActionButton = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #63666a;
    color: #fff;
  }
`;

export const StyledTotal = styled.p`
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  color: #343a40;
  margin: 20px 0 10px;
`;

