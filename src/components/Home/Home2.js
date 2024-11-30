import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2({ data }) {
  if (!data) {
    return null;
  }
  return (
    <Container fluid className="home-about-section" id="about">
      <Container md={12}>
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
