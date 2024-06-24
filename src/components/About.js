import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import "../styles/About.css";
import OutBox  from './canvas/OutBox';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const About = () =>{

  
    return(
      <section className='custom-section' id="About">
      <Container className="custom-container"> 
    
      <h2>About</h2>
        <Row>
       
          <Col xs={12} md={6} xl={6}>
         
        <div class="custom-text">
         
        <TrackVisibility duration={1500} delay={300}>{
          ({isVisible})=>

        
        <p className={isVisible ? "animate__animated animate__zoomIn" : ""}><h3>Let's think out the box create creative <span className="special-text">Ideas</span> and work with the latest <span className="special-text">Technologies</span></h3> </p>
        
      }</TrackVisibility>
      <TrackVisibility>
      { ({isVisible}) =>
      <p className={isVisible ? "animate__animated animate__rollIn" : ""} >
        I am a full stack web developer with a passion for creating modern
            interactive and responsive web applications. 
            I have experience
             with JavaScript, React, Angular, Laravel, Node.js, Express, 
            and Git. 
            I am a quick learner and I am always
            looking to expand my knowledge and skill set.
          
        </p>
        }</TrackVisibility>
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