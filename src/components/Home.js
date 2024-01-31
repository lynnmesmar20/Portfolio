import React, { useRef , useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';
import '../styles/home.css';
import ComputerCanvas from './canvas/computer';
import Icon1 from "../assets/images/linkedin.png";
import Icon2 from "../assets/images/github.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate=["Web Developer" , "Front-End Developer"];
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  
return(

  
  <section className="main" id="Home" >
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={10} md={8} xl={8}  className="text-center">
         <span className="tagLine">
            Welcome to my Portfolio!
          </span>
          <h1>{`Hello!`}</h1><span className="txt-rotate" dataPeriod="1000" 
          data-rotate='["Web Developer" , "Front-End Developer"]'><span className="wrap">{`I'm Lynn, a `}{text}</span></span>
        </Col>
        <Col xs={8} md={8} xl={8} className='custom-col'>
        <ComputerCanvas />
        </Col>
        </Row>
       <div className="social-icon " >
        <Button  onClick={()=>console.log('connect')}>Let's Connect </Button>
        <a href="http://www.linkedin.com/in/lynn-mesmar/"><img src={Icon1} alt="" /></a>
         <a href="https://github.com/lynnmesmar20"><img src={Icon2} al="" /></a>
                
             
              </div>
           
        
        
     
    </Container>
    
  </section>
);
}
export default Home;