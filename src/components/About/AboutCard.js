import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard({ data }) {
  return (
    <Container>
      <Col className="myAvtar">
        <Tilt>
          <img
            src={"https://avatars.githubusercontent.com/u/97253470?v=4"}
            className="img-fluid avatar-img"
            alt="avatar"
          />

        </Tilt>
      </Col>
      <Col>
        <Col className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            Hello, I'm  <span className="purple"> {data.name} </span>
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
            My field of Interest's are :
            <br />
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {data.interests.map((interest, index) => (
                <li key={index}>
                  <i>
                    <b className="purple">{interest}</b>
                  </i>
                </li>
              ))}
            </ul>
            {data.currentStatus}
          </p>
        </Col>
      </Col>
    </Container>

    // <Card className="quote-card-view">
    //   <Card.Body>
    //     <blockquote className="blockquote mb-0">
    //       <p style={{ textAlign: "justify" }}>
    //         Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
    //         from <span className="purple"> Bhubaneswar, India.</span>
    //         <br />
    //         I am currently employed as a software developer at Juspay.
    //         <br />
    //         I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
    //         Mesra.
    //         <br />
    //         <br />
    //         Apart from coding, some other activities that I love to do!
    //       </p>
    //       <ul>
    //         <li className="about-activity">
    //           <ImPointRight /> Playing Games
    //         </li>
    //         <li className="about-activity">
    //           <ImPointRight /> Writing Tech Blogs
    //         </li>
    //         <li className="about-activity">
    //           <ImPointRight /> Travelling
    //         </li>
    //       </ul>

    //       <p style={{ color: "rgb(155 126 172)" }}>
    //         "Strive to build things that make a difference!"{" "}
    //       </p>
    //       <footer className="blockquote-footer">Soumyajit</footer>
    //     </blockquote>
    //   </Card.Body>
    // </Card>
  );
}

export default AboutCard;
