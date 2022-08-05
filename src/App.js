
import './App.css';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img src="perfil.jpeg" alt='img' />
        <p>Desenvolvedor Front-end</p>
        <Social />
        <h2>
          Olá, tudo beleza? Eu sou o Victor Hugo, estudante de análise e desenvolvimento de sistemas,
          atualmente atuo como desenvolvedor Front-end. Tenho experiências com projetos pessoais,
          nos quais você pode conferir no meu Github!!!
        </h2>
      </div>
      <Sidebar />
      <MainContent />

    </div>
  );
}

export default App;
