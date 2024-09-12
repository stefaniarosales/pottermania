
import styled from 'styled-components';

export const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #131415;
    padding: 2rem;
    padding-top: 150px;
`

// Contenedor principal del formulario
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  background-color: #131415;
`

// Título del formulario
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

// Estilo del formulario
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  padding: 30px;
  width: 100%;

  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`

//Contenedor de etiquetas
export const ContenedorEtiquetas=styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-bottom: 10px;
`

//Contenedor de SubmitButton 
export const ContainerSubmitButton = styled.div`
  width: 100%;
  text-align: center;

`

// Etiquetas de los campos
export const Label = styled.label`
  width: 100%;
  font-size: 14px;
  color: #666;
  `

// Estilo base para los campos de texto
export const StyledField = styled.input`
  padding: 10px;
  padding-left: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
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
  font-size: 10px;
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
