import logo from './logo.svg';
import './App.css';
import Top from './components/Top';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      
      <Top/>
      <Skills/>
      <Projects/>    
      
      <Footer/>

    </div>
  );
}

export default App;
