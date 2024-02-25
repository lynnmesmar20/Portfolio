import Iconlinkedin from "../assets/images/linkedin2.png";
import Icongithub from "../assets/images/github2.png";
import "../styles/footer.css";
import CVpdf from '../assets/pdf/lynnCV.pdf';
import {Button} from 'react-bootstrap';



const CustomFooter = () =>{
   return (
    <footer className="footer border border-t-0 border-dark border-l-0 border-r-0 text-white bottom">
  <div className="container p-4 d-flex justify-content-between">
    
    <p className="legal"> © 2024 All rights reserved </p>
    
    
    <div className="iconImgs">
    
   <a href={CVpdf}  download="Lynn Mesmar CV" target="_blank" rel="noreferrer"> <Button className="button">Download CV</Button></a>
    
    <a href="http://www.linkedin.com/in/lynn-mesmar/"><img src={Iconlinkedin} alt="" /></a>
    <a href="https://github.com/lynnmesmar20"><img src={Icongithub} alt="" /></a>
    </div>
</div>
</footer>
   )


}
export default CustomFooter;