import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import CardElement from "./Card";
import FindMe from "./FindMe";

function About({ data }) {
  if (!data) {
    return null;
  }

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* About Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard data={data} />
          </Col>
        </Row>

        {/* GitHub Section */}
        <Github username={data.githubUsername} />

        {/* Achievements Section */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            My <strong className="purple">Achievements</strong>
          </h1>
        </Row>
        {data.achievements && data.achievements.length > 0 && (
          <Carousel indicators={false} touch={true}>
            {data.achievements.map((achievement, index) => (
              <Carousel.Item key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <CardElement data={achievement} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {/* Projects Section */}
        <Row style={{ justifyContent: "center", padding: "50px 0" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            My <strong className="purple">Projects</strong>
          </h1>
        </Row>
        <Row className="g-4">
          {data.projects &&
            data.projects.map((project, index) => (
              <Col key={index} md={4}>
                <CardElement data={project} />
              </Col>
            ))}
        </Row>

        {/* Social Links Section */}
        <FindMe socialLinks={data.socialLinks} />
      </Container>
    </Container>
  );
}

export default About;
