import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/spoticrylogonav.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")// Remove o token do localStorage
    navigate("/"); // Redireciona para a página de login
  };

  const handleProfileClick = () => {
    navigate("/userPage"); // Redireciona para a página de usuário
  };

  const handleHomePage = () => {
    navigate("/homePage"); // Redireciona para a página home
  };

  return (
    <NavBarContainer>
      <Logo src={logo} alt="" onClick={handleHomePage} />
      <UserActions>
        <LibraryLink onClick={handleProfileClick}>Biblioteca</LibraryLink>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </UserActions>
    </NavBarContainer>
  );
};

export default Navbar;

// Styled Components
const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-top: 2%;
`;

const Logo = styled.img`
  width: 120px;
  cursor: pointer;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: column; /* Empilha os botões verticalmente */
  align-items: center; /* Centraliza os botões */
  gap: 1rem; /* Espaçamento entre os botões */
`;

const LibraryLink = styled.span`
  background-color: #e66988;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #33bed6;
    color: #fff;
  }
`;

const LogoutButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e66988;
  }
`;
