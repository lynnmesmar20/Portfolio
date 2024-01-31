
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Tech from "./components/Tech";
function App() {
  return (
    <div className="App">
     
   <NavBar />
    <Home />
    <About/>
     <Tech/>
    </div>
  );
}

export default App;
