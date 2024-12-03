import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Para navegação
import styled from "styled-components";
import { addPlaylist } from "../../services/playlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  color: #fff;
  background-color: #181818;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #1f1f1f;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid #ff4d4f;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff4d4f;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e04143;
  }
`;

const CloseButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #333;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const formRef = useRef(null); // Referência para o formulário
  const navigate = useNavigate();

  // Função para lidar com o clique fora do formulário
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        navigate("/homePage"); // Fecha a modal ou redireciona para a página de playlists
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Limpa o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navigate]);

  // Função para enviar a nova playlist
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!playlistName || !playlistDescription) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await addPlaylist({ name: playlistName, description: playlistDescription });
      toast.success("Playlist criada com sucesso!");
      navigate("/homePage");
    } catch (error) {
      toast.error("Erro ao criar a playlist.");
    }
  };

  return (
    <Container>
      <FormContainer ref={formRef}>
        <h2>Criar Nova Playlist</h2>
        <Input
          type="text"
          placeholder="Nome da Playlist"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <Textarea
          placeholder="Descrição da Playlist"
          value={playlistDescription}
          onChange={(e) => setPlaylistDescription(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}>Criar Playlist</SubmitButton>
        <CloseButton onClick={() => navigate("/homePage")}>Cancelar</CloseButton>
      </FormContainer>
      <ToastContainer />
    </Container>
  );
}

export default AddPlaylist;
