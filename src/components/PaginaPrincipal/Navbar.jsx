import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/spoticrylogonav.png";

const Navbar = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token do localStorage
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
      <Logo src={logo} alt=""  onClick={handleHomePage}/>
      <UserActions>
        <ProfileIcon onClick={handleProfileClick} />
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
`;


const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileIcon = styled(FaUserCircle)`
  font-size: 1.8rem;
  color: #fffcec;
  cursor: pointer;

  &:hover {
    color: #c1beaf;
  }
`;

const LogoutButton = styled.button`
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e04143;
  }
`;