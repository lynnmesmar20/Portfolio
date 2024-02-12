import  "../styles/Projects.css";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import project1 from "../assets/images/project 1.png";
import project2 from "../assets/images/project 2.png";
import project3 from "../assets/images/project 3.png";
import project4 from "../assets/images/project 4.png";
import project5 from "../assets/images/project 5.png";
import project6 from "../assets/images/project 6.png";

const Projects =()=>{
  const projectsList = [
    {
      title: "Movie Fight",
      description: "Click me for the GitHub repository",
      imgUrl: project1,
      githubUrl: "https://github.com/lynnmesmar20/html-css-javascript",
    },
    {
      title: "Tavola restaurant",
      description: "Click me for the GitHub repository",
      imgUrl: project2,
      githubUrl:"https://github.com/lynnmesmar20/Tavola-restaurant-user",
    
    },
    {
      title: "Tavola restaurant",
      description: "Click me for the GitHub repository",
      imgUrl: project3,
      githubUrl: "https://github.com/lynnmesmar20/Tavola-restaurant-admin",
    },
    {
      title: "Fetch data",
      description: "Click me for the GitHub repository",
      imgUrl: project5,
      githubUrl: "https://github.com/lynnmesmar20/Devrabic-Task",

    },
    {
      title: "Monsters",
      description: "Click me for the GitHub repository",
      imgUrl: project4,
      githubUrl:"https://github.com/lynnmesmar20/Monsters",
    },
    {
      title: "Rest API",
      description: "Click me for the GitHub repository",
      imgUrl: project6,
      githubUrl:"https://github.com/lynnmesmar20/RestAPI-nodejs",
    },
    

  ];
    return (
    <section className="project" id="projects">
      <Container>
       <Row >
        <Col size={12}>
          <div>
            <h2>Projects</h2>
             <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp">
               <Tab.Pane eventKey="first">
                 <Row className="justify-content-center align-items-center">
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
      </Container>
      
    </section>
    );

}
export default Projects;