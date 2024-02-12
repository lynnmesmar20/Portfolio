
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
     
   <NavBar />
    <Home />
    <About/>
     <Tech/>
     <Projects/>
    </div>
    
  );
}

export default App;
