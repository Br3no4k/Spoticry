//import Footer from "../components/LandingPage/Footer";
import NavBar from '../components/LandingPage/NavBar';
import Banner from '../components/LandingPage/Banner';
import Footer from '../components/LandingPage/Footer';
import { GlobalStyled } from "../GlobalStyled";

export default function LandingPage() {
  return (
    <>
      <GlobalStyled />
      <NavBar />
       <Banner />
      <Footer/> 
    </>
  );
}
