
import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/Banner";
import { Top } from "./components/top/Top";
import { Cadastro } from "./components/cadastro/Cadastro";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Top />
      <Cadastro />
      <Footer />
    </div>
  );
}

export default App;
