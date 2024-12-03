import styled from "styled-components";

// Estilos gerais para o Container
export const Container = styled.div`
  padding: 20px 12%;
  font-family: Arial, sans-serif;
  margin-top: 4%;
  
  @media (max-width: 768px) {
    padding: 10px 5%;
  }
`;

// Header da playlist
export const PlaylistHeader = styled.div`
   display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Informações da playlist
export const PlaylistInfo = styled.div`
   display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center; /* Centraliza o conteúdo */
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

// Imagem da playlist
export const PlaylistImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px; /* Borda mais suave */
  border: 3px solid #ff69b4; /* Cor suave de borda */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Sombra suave para destacar a imagem */
`;

// Detalhes da playlist
export const PlaylistDetails = styled.div`
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ff69b4;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Botão para sair
export const LeaveButton = styled.button`
   background-color: #33bed6; /* Cor vermelha de destaque */
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 15px; /* Borda arredondada */
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e04143; /* Efeito ao passar o mouse */
  }
`;

// Tabela de músicas
export const PlaylistTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #3a3838;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  
  td,th {
    padding: 12px;
    color: #ff69b4;
  }

  th {
    font-weight: bold;
    font-size: 1.1rem;
    border-bottom: 2px solid #444;
    color: #ff69b4;
  }

  td {
    font-size: 1rem;
    border-bottom: 1px solid #333;
  }

  tr:hover td {
    background-color: #2a2a2a;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Thumbnail das músicas
export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

// Placeholder para a imagem padrão
export const DefaultImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  border-radius: 10px;
`;

// Spinner
export const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Botões de ação (Editar e Deletar)
export const ButtonDelete = styled.button`
  background-color: #ff4747;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e04040;
  }

  &:focus {
    outline: none;
  }
`;