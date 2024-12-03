import {
  NavbarContainer,
  Logo,
  NavLink,
  NavLinks,
  NavLinkLogin,
} from "../../styles/LandingPage/NavBarStyles";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/spoticrylogonav.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="logo" />
     <NavLinkLogin to="/loginPage">
        Login
      </NavLinkLogin>
    </NavbarContainer>
  );
};

export default Navbar;
