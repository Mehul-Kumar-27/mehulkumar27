import React from "react";
import { Container, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function AboutCard({ data }) {
  return (
    <Container>
      <Col className="myAvtar">
        <Tilt>
          <img src={data.image} className="img-fluid avatar-img" alt="avatar" />
        </Tilt>
      </Col>
      <Col>
        <Col className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            Hello, I'm <span className="purple"> {data.name} </span>
          </h1>
          <p className="home-about-body">
            {data.description}
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="purple"> {data.languages.join(", ")}</b>
            </i>
            <br />
            <br />
            <b>My field of Interest's are :</b>
            <br />
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              {data.interests.map((interest, index) => (
                <li key={index}>
                  <i>
                    <b className="purple">{interest}</b>
                  </i>
                </li>
              ))}
            </ul>
            <br/>
            {data.currentStatus}
            <br />
          </p>
        </Col>
      </Col>
    </Container>
  );
}

export default AboutCard;
