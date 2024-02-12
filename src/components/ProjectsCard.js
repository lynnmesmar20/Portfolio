import { Col } from "react-bootstrap";
import  "../styles/Projects.css";
export const ProjectsCard = ({ title, description, imgUrl ,githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4} xl={4}>
      <div className="proj-imgbx" onClick={()=>window.location.href=githubUrl}>
        <img src={imgUrl} className="proj-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
export default ProjectsCard;