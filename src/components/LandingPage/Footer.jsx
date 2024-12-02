import { FooterContainer, LogoContainer,Logo,CopyrightText} from "../../styles/LandingPage/FooterStyled";
import logo from '../../assets/spoticrylogonav.png';
import { FaYoutube,FaInstagram , } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
      <FooterContainer className="footerback">
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
        </LogoContainer>
    
        <CopyrightText>© 2024 Spoticry. Todos os direitos reservados. A música, sempre com você.</CopyrightText>
     
      </FooterContainer>
    );
  };
  
  export default Footer;