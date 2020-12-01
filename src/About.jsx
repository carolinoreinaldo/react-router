import { Link } from 'react-router-dom';
import './App.css';

function About() {
  return (
    <div className="App">
      <h1>About</h1>
      <span><Link to="/">Ir para Home</Link></span>
    </div>
  );
}

export default About;
