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
    margin-right: 10px;
  }
`;

const RemoveSongButton = styled.button`
  margin-top: 12px;
  padding: 10px 20px;
  background-color: #ff69b4;
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
  background-color: red;
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

const RemoveSongsComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
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
    setSelectedSongs((prevSelected) =>
      prevSelected.includes(songId)
        ? prevSelected.filter((id) => id !== songId)
        : [...prevSelected, songId]
    );
  };

  const handleRemoveSelected = async () => {
    try {
      if (selectedSongs.length > 0) {
        setLoading(true);
        toast.info('Removendo música, aguarde...');

        for (const songId of selectedSongs) {
          const song = songs.find((song) => song.id === songId);

          // Verifique se a música pertence ao usuário logado
          if (song && song.userId !== userId) {
            toast.error(`Você não pode excluir a música '${song.title}', pois não é o criador.`);
            return;
          }

          // Se a música pertence ao usuário, exclua-a
          await axios.delete(
            `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/song/${songId}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
        }

        setSongs((prevSongs) => prevSongs.filter((song) => !selectedSongs.includes(song.id)));
        setSelectedSongs([]);
        setModalOpen(false);
        toast.success('Música(s) removida(s) com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao remover músicas:', error);
      setError('Erro ao remover músicas. Tente novamente.');
      toast.error('Erro ao remover música. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <CustomButton onClick={() => setModalOpen(true)}>
        <ButtonText>Remover música</ButtonText>
      </CustomButton>

      {isModalOpen && (
        <ModalOverlay onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <ModalWrapper>
            <h2>REMOVER MÚSICAS</h2>
            {isLoading && <p>Removendo músicas...</p>}
            {error && <p>{error}</p>}
            <SongList>
              {songs.length === 0 ? (
                <p>Você não tem músicas para remover.</p>
              ) : (
                songs.map((song) => (
                  <SongItem key={song.id}>
                    <input
                      type="checkbox"
                      checked={selectedSongs.includes(song.id)}
                      onChange={() => handleToggleSelection(song.id)}
                    />
                    {song.title} | {song.artist}
                  </SongItem>
                ))
              )}
            </SongList>
            <RemoveSongButton onClick={handleRemoveSelected} disabled={isLoading}>
              Remover Selecionadas
            </RemoveSongButton>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default RemoveSongsComponent;

