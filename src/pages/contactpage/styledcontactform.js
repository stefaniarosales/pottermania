
import styled from 'styled-components';

// Contenedor principal del formulario
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

    background-image: url(/img/contactform/hogwarts.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

// Título del formulario
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

// Estilo del formulario
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 15px;
`;

// Etiquetas de los campos
export const Label = styled.label`
  font-size: 14px;
  color: #666;
`;

// Estilo base para los campos de texto
export const StyledField = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Estilo para el textarea
export const TextArea = styled(StyledField)`
  height: 100px;
`;

// Estilo para los mensajes de error
export const ErrorText = styled.div`
  font-size: 12px;
  color: red;
`;

// Estilo del botón de enviar
export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
