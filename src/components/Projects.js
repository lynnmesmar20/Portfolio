import  "../styles/Projects.css";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import project1 from "../assets/images/project 1.png";
import project2 from "../assets/images/project 2.png";
import project3 from "../assets/images/project 3.png";
import project4 from "../assets/images/project 4.png";
import project5 from "../assets/images/project 5.png";
import project6 from "../assets/images/project 6.png";
import TrackVisibility from 'react-on-screen';

const Projects =()=>{
  const projectsList = [
    {
      title: "Movie Fight",
      description: "Click me for the GitHub repository",
      imgUrl: project1,
      githubUrl: "https://github.com/lynnmesmar20/html-css-javascript",
      previewUrl:"",
    },
    {
      title: "Tavola restaurant",
      description: "Click me for the GitHub repository",
      imgUrl: project2,
      githubUrl:"https://github.com/lynnmesmar20/Tavola-restaurant-user",
      previewUrl:"",
    },
    {
      title: "Tavola restaurant",
      description: "Click me for the GitHub repository",
      imgUrl: project3,
      githubUrl: "https://github.com/lynnmesmar20/Tavola-restaurant-admin",
      previewUrl:"",
    },
    {
      title: "Fetch data",
      description: "Click me for the GitHub repository",
      imgUrl: project5,
      githubUrl: "https://github.com/lynnmesmar20/Devrabic-Task",
      previewUrl:"",

    },
    {
      title: "Monsters",
      description: "Click me for the GitHub repository",
      imgUrl: project4,
      githubUrl:"https://github.com/lynnmesmar20/Monsters",
      previewUrl:"",
    },
    {
      title: "Rest API",
      description: "Click me for the GitHub repository",
      imgUrl: project6,
      githubUrl:"https://github.com/lynnmesmar20/RestAPI-nodejs",
      previewUrl:"",
    },
    

  ];
    return (
    <section className="project" id="Projects">
      <Container>
        <TrackVisibility  duration={1500}  delay={300} >
        {({isVisible})=>
        <div className={isVisible ? "animate__animated animate__fadeInLeftBig": ""}>
      <h2>Projects</h2>
       <Row >
        <Col xs={12}>
          <div>
           
             <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
               <Tab.Pane eventKey="first">
                
                 <Row className="align-items-center">
                   {
                     projectsList.map((project, index) => {
                        return (
                            <ProjectsCard
                              key={index}
                              {...project}
                               />
                            )
                          })
                        }
                    </Row>
                  </Tab.Pane>
                  
                 </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
        </div>}
        </TrackVisibility>
      </Container>
      
    </section>
    );

}
export default Projects;