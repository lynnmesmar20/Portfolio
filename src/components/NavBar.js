
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import "../styles/navBar.css";
import { useState , useEffect } from 'react';

const NavBar =() => {
 const [activeLink , setIsActiveLink] = useState('Home');
 const [isScrolled , setIsScrolled] = useState(false);

 useEffect( ()=>{
  const onScroll =() =>{
    if(window.scrollY > 50){
      setIsScrolled(true);
    }
    else{
      setIsScrolled(false);
    }
  }

  window.addEventListener("scroll" , onScroll );
  return() => window.removeEventListener("scroll" , onScroll);
 }
  
  
  ,[]);
 console.log(isScrolled);
  const onUpdateActiveLink= (value) =>{
    setIsActiveLink(value);
  }
  return (
    <Router>
    <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo "/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars/>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link  href="#Home" className={activeLink === 'Home' ? 'active custom-link' : 'custom-link'} onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
            <Nav.Link href="#About" className={activeLink === 'About' ? 'active custom-link' : 'custom-link'} onClick={() => onUpdateActiveLink('About')}>About</Nav.Link>
            <Nav.Link  href="#Projects" className={activeLink === 'Projects' ? 'active custom-link' : 'custom-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
            <Nav.Link  href="#Contact" className={activeLink === 'Contact' ? 'active custom-link' : 'custom-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  );
}

export default NavBar;