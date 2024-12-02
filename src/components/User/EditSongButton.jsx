import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  background-color: #121212;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SongItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  }
`;

const EditSongButtonStyled = styled.button`
  margin-top: 12px;
  padding: 10px 20px;
  background-color: #121212;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  font-family: 'Roboto', sans-serif;
`;

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #037dfa;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  width: 200px;
  height: 45px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const ButtonText = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const EditSongsComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  const userId = token ? jwtDecode(token).id : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song', {
          headers: {
            Authorization: token,
          },
        });

        // Filtra as músicas criadas pelo usuário logado
        const userSongs = response.data.songs.filter((song) => song.userId === userId);
        setSongs(userSongs);
      } catch (error) {
        console.error('Erro ao obter músicas:', error);
        setError('Erro ao carregar músicas. Tente novamente.');
      }
    };

    if (isModalOpen) {
      fetchData();
    }
  }, [isModalOpen, userId]);

  const handleToggleSelection = (songId) => {
    setSelectedSongId(songId === selectedSongId ? null : songId);
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSelected = async () => {
    try {
      if (selectedSongId) {
        setLoading(true);
        toast.info('Editando música, aguarde...');

        await axios.patch(
          `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${selectedSongId}`,
          {
            title: updatedDetails.updatedTitle,
            artist: updatedDetails.updatedArtist,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setUpdatedDetails({});
        setModalOpen(false);
        toast.success('Música editada com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao editar música:', error);
      setError('Erro ao editar música. Tente novamente.');
      toast.error('Erro ao editar música. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <CustomButton onClick={() => setModalOpen(true)}>
        <ButtonText>Editar música</ButtonText>
      </CustomButton>

      {isModalOpen && (
        <ModalOverlay onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <ModalWrapper>
            <h2>EDITAR MÚSICA</h2>
            {isLoading && <p>Processando...</p>}
            {error && <p>{error}</p>}
            <SongList>
              {songs.length === 0 ? (
                <p>Você não tem músicas para editar.</p>
              ) : (
                songs.map((song) => (
                  <SongItem key={song.id}>
                    <input
                      type="radio"
                      checked={song.id === selectedSongId}
                      onChange={() => handleToggleSelection(song.id)}
                    />
                    {song.title} | {song.artist}
                  </SongItem>
                ))
              )}
            </SongList>
            <div>
              <label htmlFor="updatedTitle">Novo Título: </label>
              <input
                type="text"
                id="updatedTitle"
                name="updatedTitle"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="updatedArtist">Novo Artista: </label>
              <input
                type="text"
                id="updatedArtist"
                name="updatedArtist"
                onChange={handleInputChange}
              />
            </div>
            <EditSongButtonStyled onClick={handleEditSelected} disabled={isLoading}>
              Editar Selecionada
            </EditSongButtonStyled>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default EditSongsComponent;
