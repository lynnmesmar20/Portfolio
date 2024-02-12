import React from "react";
import Ball from "./canvas/Ball";
import technologies from "./Technologies";
import {Row, Col } from "react-bootstrap";
const Tech = () =>{
    
 return (
    <div className='flex mt-5'>
        <Row className="justify-content-center align-items-space-around">
          <h2>Skills</h2>
       {technologies.map((technology) => (
        <Col xs={4} md={2} xl={2}>
      <div  key={technology.name}>
        <Ball icon={technology.icon} />
        </div>
        </Col>

        
      
    ))}
    </Row>
  </div>
    )
}
export default Tech;