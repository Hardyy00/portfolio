import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import Particle from "../Particle.jsx";

import port from "../../Assets/Projects/port.png";
import streamers from "../../Assets/Projects/streamers.png";
import doctor from "../../Assets/Projects/doctor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streamers}
              isBlog={false}
              title="Streamers : A Streaming Platform"
              description="A streaming platform, where a host can live stream and viewers can enjoy with stream and can have interactivity with the host. Host has the power to block ,kick or remove participant and many more."
              ghLink="https://github.com/Hardyy00/streaming-app"
              demoLink="https://streamers-lime.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="Doctor Appointment System"
              description="A platform to look for doctors. Patients and Doctors can create a separate account. Patients look for doctors, book them and many more."
              ghLink="https://github.com/Hardyy00/Doctor-Appointment-System-with-TS"
              demoLink="https://sprightly-lolly-742e08.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio"
              ghLink="https://github.com/Hardyy00/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
