import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <span><Link to="About">Ir para Sobre</Link></span>
    </div>
  );
}

export default App;
