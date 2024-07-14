import './App.css';
import NavBar from './components/NavBar/navbar.tsx'
import Home from './components/Home/home.tsx'
import About from './components/About/about.tsx'
import Projects from './components/Projects/projects.tsx'
import Papers from './components/Papers/papers.tsx'
import Skills from './components/Skills/skills.tsx'
import Contact from './components/Contact/contact.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Scroll from './components/Scroll/scroll.tsx';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Container id="Home">
          <Home/>
        </Container>
        <hr className="w-75 mx-auto my-1" />
        <Container id="About">
          <About/>
        </Container>
        <hr className="w-75 mx-auto my-1" />
        <Container id="Projects">
          <Projects/>
        </Container>
        <hr className="w-75 mx-auto my-1" />
        <Container id="Publications">
          <Papers/>
        </Container>
        <hr className="w-75 mx-auto my-1" />
        <Container id="Skills">
          <Skills/>
        </Container>
        <hr className="w-75 mx-auto my-1" />
        <Container id="Contact">
          <Contact/>
        </Container>
        <Scroll/>
      </header>
    </div>
  );
}

export default App;