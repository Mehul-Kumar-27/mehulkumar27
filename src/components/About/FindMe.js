import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function FindMe({ socialLinks }) {
  return (
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          {socialLinks.github && (
            <li className="social-icons">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
          )}
          {socialLinks.twitter && (
            <li className="social-icons">
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          )}
          {socialLinks.linkedin && (
            <li className="social-icons">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          )}
          {socialLinks.email && (
            <li className="social-icons">
              <a
                href={`mailto:${socialLinks.email}`}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillMail />
              </a>
            </li>
          )}
        </ul>
      </Col>
    </Row>
  );
}

export default FindMe;
