import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative; /* Modificado de fixed para relative */
  display: flex;
  flex-direction: row; /* Alinha os itens na horizontal */
  align-items: center; /* Alinha os itens verticalmente no centro */
  justify-content: space-between; /* Espaço entre os itens */
  padding: 200px; /* Ajuste para responsividade */
  margin-top: 0%;
  width: 100%; /* Agora o container ocupa toda a largura disponível */
  z-index: 10; /* Garante que fique acima de outros elementos, mas não sobreponha outros com z-index maior */

  @media (max-width: 768px) {
    padding: 100px; /* Diminui o padding em telas menores */
    flex-direction: column; /* Coloca os itens em coluna em telas menores */
    text-align: center; /* Centraliza o texto em telas menores */
  }
`;

export const BannerContent = styled.div`
  text-align: left; /* Alinha o texto à esquerda */
  margin-bottom: 20px;
  flex: 1; /* O texto ocupará o espaço restante */

  @media (max-width: 768px) {
    text-align: center; /* Centraliza o texto em telas menores */
    margin-bottom: 10px; /* Ajusta a margem inferior em telas menores */
  }
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
