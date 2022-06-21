// import logo from './logo.svg';
import eu from './imagem/imagemSabreLuz.jpg'
import './App.css';

function App() {
  
  function mensagem(){
    alert ("o botão foi apertado")
  }

  return (
    <div className="App">
      <h1>Olá, sou Carol Marques!</h1>
      <img className="minhaFoto" src={eu} alt="Foto" />
      <p>May the force be with us!</p>

      <button onClick={mensagem}>Clique aqui!</button>
    </div>
  );
}

export default App;
