import {useState} from "react";
import {Row,Col,Container} from "react-bootstrap";
import 'animate.css';
import "../styles/contact.css";
import contactImg from "../assets/images/contact.jpg";
import emailjs from "@emailjs/browser";
import TrackVisibility from "react-on-screen";

const Contact =() =>{
  
 const initialDetails={
    from_name: "",
    from_email: "",
    message: ""
 };
const [formDetails , setFormDetails] = useState(initialDetails);
const [buttonText , setButtonText] = useState("Send");


const UpdateDetails =(property , value) =>{
   setFormDetails({
    ...formDetails,
    [property] : value
});

}
const serviceId = 'service_y1uf6hn';
const templateId = 'template_74em4up';
const publicKey = 't79r-ox_ujgOpyke3';
const handleSubmit = async (e) =>{
  e.preventDefault();
  setButtonText("Sending...");
  console.log("Form Details:", formDetails);
 try{
    await emailjs.send( serviceId , templateId ,formDetails,publicKey);
    alert('Message sent successfully');
    setButtonText("Send");
    setFormDetails(initialDetails);
  }
  catch(error){
    console.error("Error sending email:", error);
  alert('Something went wrong, please try again later.');
   setButtonText("Send");
  }   
    
  };
return (
    <section className="contact" id="Contact">
        
        <Container >
        <h2>Get In Touch</h2>
        <TrackVisibility>{
                    ({isVisible}) => 
             <Row xs={12} md={6}>
            
             
            <Col xs={12} md={6} >
               
            <div className={`contactContainer ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`} > 
                 <form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={12}>
                            <input type ="text" value ={formDetails.from_name} placeholder="Name" onChange={(e)=>UpdateDetails("from_name",e.target.value)}/>
                        </Col>
                        
                        <Col md={12}>
                            <input type ="email" value ={formDetails.from_email} placeholder="Email" onChange={(e)=>UpdateDetails("from_email",e.target.value)}/>
                        </Col>
                        <Col md={12}>
                         <textarea placeholder="Message" rows='7' value={formDetails.message} onChange={(e)=>UpdateDetails("message",e.target.value)}/>
                         <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                       
                    </Row>
                 </form>
                 </div>
              
            </Col>
            <Col xs={12} md={6}>
           
       
          <img
            src={contactImg}
            alt=""
            className={`contactImg ${isVisible ? 'animated' : ''}`}
          />
      
            </Col>
         </Row>
           }
           </TrackVisibility>
        </Container>
    </section>
);
}
export default Contact;