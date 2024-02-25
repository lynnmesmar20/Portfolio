import React from "react";
import Ball from "./canvas/Ball";
import technologies from "./Technologies";
import {Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";
const Tech = () =>{
    
 return (
  <container>
   <TrackVisibility  duration={1500} delay={300}>  
   { ({isVisible}) =>
       <div className={isVisible ? "animate_animated animate__tada":""}>
   
         <Row  className="justify-content-center align-items-space-around">
        
       {technologies.map((technology) => (
        <Col xs={4} md={2} xl={2}>
      <div  key={technology.name}>
        <Ball icon={technology.icon} />
        </div>
        </Col>

        
      
    ))}
    </Row>

  </div>
}</TrackVisibility>
  </container>
    )
}
export default Tech;