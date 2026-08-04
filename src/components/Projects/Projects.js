import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectImg from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Project</strong>
        </h1>
        <p style={{ color: "white" }}>
          A polished e-commerce experience with a clean UI, product discovery, and responsive storefront design.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              isBlog={false}
              title="Asiaurs Store"
              description="A refined online store with responsive pages, eye-catching product presentation, and a seamless shopping experience for modern users."
              ghLink="https://asiaurs.store/"
              linkLabel="Visit Store"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
