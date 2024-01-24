import "./App.css";
import Certificacoes from "./Sections/Certificacoes";
import Contato from "./Sections/Contato";
import Header from "./Sections/Header";
import Projetos from "./Sections/Projetos";
import SobreMim from "./Sections/SobreMim";
import Tecnologias from "./Sections/Tecnologias";

function App() {
  return (
    <> 
      <Header />
      <SobreMim />
      <Projetos />
      <Tecnologias />
      <Certificacoes />
      <Contato />
    </>
  );
}

export default App;
