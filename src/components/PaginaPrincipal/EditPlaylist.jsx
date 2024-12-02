import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Estilos
const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

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
  background-color: #1d1d1d;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

const EditPlaylistButton = styled.button`
  margin-top: 12px;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Componente para editar a playlist
const EditPlaylistComponent = ({ playlistId, initialPlaylistName, onClose }) => {
  const [updatedName, setUpdatedName] = useState(initialPlaylistName);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEditPlaylist = async () => {
    if (!updatedName) {
      toast.error('O nome da playlist é obrigatório.');
      return;
    }

    try {
      setLoading(true);
      toast.info('Editando playlist, aguarde...');

      // Enviar apenas o campo "name" para a requisição PATCH
      await axios.patch(
        `https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}`,
        {
          name: updatedName, // Apenas o campo "name"
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );

      toast.success('Playlist editada com sucesso!');
      onClose(); // Fecha o modal após sucesso
    } catch (err) {
      console.error('Erro ao editar playlist:', err);
      setError('Erro ao editar playlist. Tente novamente.');
      toast.error('Erro ao editar playlist. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrapper>
        <h2>Editar Playlist</h2>
        {isLoading && <p>Processando...</p>}
        {error && <p>{error}</p>}
        <div>
          <label htmlFor="name">Nome da Playlist:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedName}
            onChange={handleInputChange}
          />
        </div>
        <EditPlaylistButton onClick={handleEditPlaylist} disabled={isLoading}>
          {isLoading ? 'Editando...' : 'Salvar Alterações'}
        </EditPlaylistButton>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default EditPlaylistComponent;