import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-top: 2%;
 
`;

export const Logo = styled.img`
  width: 120px;
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
   padding: 18px 34px;
  font-size: 18px;
  margin-left: 60%;
  background-color: transparent;
  transition: 0.3s ease-in-out;

 
`;
