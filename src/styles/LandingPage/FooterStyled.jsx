import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed; /* Fixa o rodapé no final da página */
  bottom: 0; /* Alinha o rodapé à parte inferior */
  left: 0; /* Certifica-se de que o rodapé fique alinhado à esquerda */
  width: 100%; /* Garante que ocupe toda a largura */
  z-index: 500; /* Coloca o footer abaixo do banner, garantindo que o banner tenha z-index maior */
  padding: 20px 5%; /* Ajusta o espaçamento */
  display: flex; /* Alinha os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  justify-content: space-between; /* Espaço entre logo e texto */
  background-color: #121212; /* Fundo escuro */

  @media (max-width: 768px) {
    padding: 20px 10%; /* Ajusta o espaçamento para telas menores */
  }
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
