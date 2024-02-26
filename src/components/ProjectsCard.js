import { Col } from "react-bootstrap";
import  "../styles/Projects.css";
export const ProjectsCard = ({ title, description, imgUrl ,githubUrl , previewUrl }) => {
  return (
    <Col  xs={12} md={6} xl={4} >
      <div className="proj-imgbx">
        <img src={imgUrl} className="proj-img"  alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
         {/* <br/>
        <a href={previewUrl} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-eye" aria-hidden="true" style={{ color: '#04182d', marginRight: '5px' }}></i></a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
   <i class="fa fa-code" aria-hidden="true" style={{ color: '#04182d', marginleft: '5px' }}></i></a>
   */}  </div>
      </div>
    </Col>
  )
}
export default ProjectsCard;