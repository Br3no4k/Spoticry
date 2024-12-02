import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  position: fixed; /* Fixa no topo da página */
  top: 0; /* Alinha ao topo */
  left: 0; /* Garante alinhamento à esquerda */
  width: 100%; /* Ocupa toda a largura da página */
  display: flex;
  align-items: center;
  justify-content:flex-end;/* Espaço entre os elementos */
  padding: 10px 500px;
  background-color: #121212; /* Fundo da navbar */
  z-index: 1000; /* Garante que estará acima de outros elementos */
 
`;

export const Logo = styled.img`
  width: 10%;
  height: auto;
  margin-left: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-left: 2rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fffcec;
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ff69b4;
  }
`;

export const NavLinkLogin = styled(NavLink)`
  margin-right: 1%;
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 18px 34px;
  font-size: 18px;
  margin-left: 60%;
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #ff69b4; 
    border-color: #ff69b4; 
  }
`;
