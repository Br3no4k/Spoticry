import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import PlaylistTb from "../components/PaginaPrincipal/PlaylistTb";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import AdicionarPlaylist from "../components/User/ModalAddPlaylist";  // Importando a modal
import Navbar from "../components/PaginaPrincipal/Navbar";
import { GlobalStyled } from "../GlobalStyled";
import AddSongButton from "../components/User/AddSongButton";
import EditSongButton from "../components/User/EditSongButton";  // Importando o componente de editar música
import RemoveSongsComponent from "../components/User/RemoveSongButton"; // Importando o novo componente
import EditSongsComponent from "../components/User/EditSongButton";

// Função para recuperar o userId do token
const getUserIdFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.id; // Substitua 'id' pelo nome correto no seu payload JWT
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
};

// Estilos
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: #121212;  /* Fundo escuro */
  min-height: 100vh;
`;

const ContainerPrincipal = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  background-color: #1e1e1e;  /* Fundo mais claro para o conteúdo */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 60%;
  margin: 20px auto;
  padding: 12px 20px;
  border-radius: 30px;
  border: 1px solid #444;
  background-color: #2d2d2d;
  color: white;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #ff69b4;  /* Cor de foco */
  }
`;

const PaginationButton = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003f7f;
  }
`;

const Title = styled.h1`
  color: #ff69b4;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PlaylistListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const PlaylistItem = styled.div`
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

// Componente Principal
function Home() {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate(); // Hook para navegação

  // Função para embaralhar as playlists
  const shufflePlaylists = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca elementos
    }
    return arr;
  };

  // Chamada para buscar playlists da API
  useEffect(() => {
    async function loadPlaylists() {
      try {
        const response = await axios.get('API_URL');
        setPlaylists(shufflePlaylists(response.data)); // Embaralha as playlists
      } catch (error) {
        console.error('Erro ao carregar playlists:', error);
      }
    }

    loadPlaylists();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <ContainerPrincipal>
          <Title>Playlists da Comunidade</Title>

          {/* Barra de pesquisa */}
          <SearchBar placeholder="Pesquise por playlists..." />

          {/* Lista de playlists */}
          <PlaylistListContainer>
            {playlists.map((playlist) => (
              <PlaylistItem key={playlist.id}>
                <PlaylistTb playlist={playlist} />
              </PlaylistItem>
            ))}
          </PlaylistListContainer>

          {/* Botão de paginação */}
          <PaginationButton onClick={() => alert('Paginando...')}>Próxima Página</PaginationButton>
        </ContainerPrincipal>
      </Container>
    </>
  );
}

export default Home;
