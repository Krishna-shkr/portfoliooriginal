import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Pipeline from './components/Pipeline/pipeline';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Intro />
        <About />
        <Skills />
        <Pipeline />
        <Works />
      </main>
      <Contact />
    </div>
  );
}

export default App;
