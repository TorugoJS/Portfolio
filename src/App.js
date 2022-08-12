import Navbar from "./layout/navbar/navbar";
import Contato from "./Sessões/Contato/Contato";
import Home from "./Sessões/Home/Home";
import SobreMim from "./Sessões/sobre-mim/SobreMim";
import Tecnologias from "./Sessões/Tecnologias/Tecnologias";
import Footer from './Sessões/Footer/Footer'
import Projetos from "./Sessões/Projetos/Projetos";


function App() {
  return (
    
    <div className="app">
      <Navbar />
      <Home />
      <SobreMim />
      <Tecnologias />
      <Projetos />
      <Contato  />
      <Footer />
    </div>
  );
}

export default App;
