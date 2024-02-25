
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
     
   <NavBar />
    <Home />
    <About/>
     <Projects/>
     <Tech/>
     <Contact/>
     <Footer/>
    </div>
    
  );
}

export default App;
