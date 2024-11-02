import styled from 'styled-components'

export const ContainerSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #131415;
    padding-left: 1rem;
    padding-right: 1rem;

    background-image: url(/img/hero/hero.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 20px;
  width: 90%;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

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

export const ContenedorEtiquetas=styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
`
 
export const ContainerSubmitButton = styled.div`
  width: 100%;
  text-align: center;
  padding: 5px;
`

export const Label = styled.label`
  width: 100%;
  font-size: 14px;
  color: #666;
`

export const StyledField = styled.input`
  padding: 10px;
  padding-left: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
  outline: none;
`

export const TextArea = styled(StyledField)`
  height: 80px;
`

export const ErrorText = styled.div`
  font-size: 10px;
  color: red;
`

export const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: 1px black solid;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #131415;
    color: white;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`
