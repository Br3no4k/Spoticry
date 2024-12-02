import styled from "styled-components";

export const BannerContainer = styled.div`
 position: fixed;
  display: flex;
  flex-direction: row; /* Alinha os itens na horizontal */
  align-items: center; /* Alinha os itens verticalmente no centro */
  justify-content: space-between; /* Espaço entre os itens */
  padding: 400px;
  margin-top: 0%;
  width: 100%; /* Agora o container ocupa toda a largura disponível */
`;

export const BannerContent = styled.div`
  text-align: left; /* Alinha o texto à esquerda */
  margin-bottom: 20px;
  flex: 1; /* O texto ocupará o espaço restante */
`;

export const BannerTitle = styled.h1`
  font-size: 2rem;
  color: #FFFCEC;
  margin-bottom: 10px;
`;

export const TextPrincipal = styled.p`
  font-size: 1rem;
  color: #FFFCEC;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const ImageBanner = styled.div`
  flex: 1; /* A imagem ocupará o restante do espaço */
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */
  padding: 0px;

  img {
    width: 100%; /* A imagem ocupará 100% do tamanho do seu contêiner */
    max-width: 400px; /* Limite o tamanho máximo da imagem */
    height: auto; /* Mantém a proporção da imagem */
  }
`;

