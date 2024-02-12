import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/About.css";
import OutBox  from './canvas/OutBox';

const About = () =>{
  useEffect(()=>{
    const handleScroll = () =>{
      const element = document.querySelector('.custom-text p:first-of-type');
      const element2 = document.querySelector('.custom-text p:last-of-type');
      const elementPosition = element.getBoundingClientRect().top;
      const elementPosition2 = element2.getBoundingClientRect().top;
      const threshold= window.innerHeight ;
      if(elementPosition < threshold){
        element.classList.add('animated');

      }
      if(elementPosition2 < threshold){
        element2.classList.add('animated2');
        
      }
    }
      window.addEventListener("scroll", handleScroll);
      return () =>{
        window.removeEventListener('scroll' ,handleScroll);
      }
    
  },[]);
  
    return(
      <section className='custom-section' id="About">
      <Container className="custom-container"> 
        <Row>
        <h2>About</h2>
          <Col xs={12} md={6} xl={6}>
         
        <div class="custom-text">
         
        
        <p><h3>Let's think out the box create creative <span className="special-text">Ideas</span> and work with the latest <span className="special-text">Technologies</span></h3> </p>
        <p>
        I am a full stack web developer with a passion for creating modern
            interactive and responsive web applications. 
            I have experience
             with JavaScript, React, Node.js, Express, 
            and Git. 
            I am a quick learner and I am always
            looking to expand my knowledge and skill set.
          
        </p>
         </div>
         </Col>
         <Col xs={12} md={6} xl={6} className="canvas">
         <OutBox/>
         </Col>
        </Row>
        
      </Container>
      </section>
    );
}
export default About;