import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed; /* Fixar o rodapé no final da página */
  bottom: 0; /* Alinhá-lo na parte inferior */
  left: 0; /* Certificar que fique alinhado à esquerda */
  width: 100%; /* Garantir que ocupe toda a largura */
  z-index: 1000; /* Certificar-se de que esteja acima de outros elementos */
  padding: 20px 5%; /* Ajustar espaçamento */
  display: flex; /* Alinha os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  justify-content: space-between; /* Espaço entre logo e texto */
  background-color: #121212; /* Fundo escuro */
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center; /* Centraliza o conteúdo verticalmente */
`;

export const Logo = styled.img`
  width: 120px; /* Ajusta o tamanho do logo */
`;

export const CopyrightText = styled.p`
  color: #FFF; /* Define o texto como branco */
  font-size: 14px; /* Ajusta o tamanho do texto */
  margin: 0; /* Remove a margem */
  text-align: right; /* Alinha o texto à direita */
`;
