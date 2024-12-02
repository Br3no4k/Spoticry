import styled from 'styled-components'

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%; 
 
`;

export const FormLogin = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212; /* Fundo da navbar */
  z-index: 1000; /* Garante que estará acima de outros elementos */
  border-radius: 40px;
  border: 2px solid #ff69b4;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: bold; 
  }

  a {
    color: white;
    font-size: 14px;
  }

  input{
    color: #FFF;
  font-size: 20px;
  background-color: #ff69b4;
  border: 2px solid #ff69b4;
  border-radius: 8px;
  padding: 16px 20px;
  width: 100%;
  }

  button{
    color: #FFF;
  font-size: 20px;
  border: 30px;
  background-color: #ff69b4;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  }
`

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`
