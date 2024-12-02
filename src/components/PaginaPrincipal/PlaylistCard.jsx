import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components
const PlaylistCardContainer = styled.div`
  display: flex;
  flex-direction: row;  /* Altera para row para imagem e texto ficarem lado a lado */
  align-items: center;
  margin: 1rem;
  background-color: #f4f4f4;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  
`;

const PlaylistLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;  /* Alinha o conteúdo de forma horizontal */
`;

const PlaylistImage = styled.img`
  width: 100px;  /* Ajusta o tamanho da imagem */
  height: 60px;
  object-fit: cover;
  margin-right: 1rem;  /* Adiciona espaço entre a imagem e o texto */
`;

const PlaylistInfo = styled.div`
  padding: 0.5rem;
  text-align: left;  /* Alinha o texto à esquerda */
  color: #ff69b4;
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #121212;
  }
`;

// Função para cortar o nome e mostrar apenas as 10 primeiras letras
const truncateName = (name) => {
  if (name.length > 10) {
    return name.substring(0, 10) + '...';  // Adiciona "..." caso o nome seja maior que 10 letras
  }
  return name;
};

const PlaylistCard = ({ playlist }) => (
  <PlaylistCardContainer>
    <PlaylistLink to={/playlists/${playlist._id}}>
      <PlaylistImage 
        src="https://picsum.photos/200/120" 
        alt={playlist._name} 
      />
      <PlaylistInfo>
        <h3>{truncateName(playlist._name)}</h3>  {/* Usa a função para cortar o nome */}
      </PlaylistInfo>
    </PlaylistLink>
  </PlaylistCardContainer>
);

export default PlaylistCard;