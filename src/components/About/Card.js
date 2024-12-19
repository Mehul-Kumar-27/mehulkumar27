import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgLink } from "react-icons/cg";

function CardElement({ data }) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = () => {
    setExpanded(true);
    setShowModal(true);
  };

  const handleReadLess = () => {
    setExpanded(false);
    setShowModal(false);
  };

  return (
    <>
      <Card
        className="project-card-view"
        style={{ width: "300px", height: "400px" }}
      >
        {data.imageLink && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Img
              variant="top"
              src={data.imageLink}
              alt="card-img"
              style={{ width: "300px", height: "200px", objectFit: "contain" }}
            />
          </div>
        )}
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text
            style={{
              textAlign: "justify",
              height: expanded ? "auto" : "100px",
              overflow: expanded ? "visible" : "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.description}
          </Card.Text>
          <Button
            variant="secondary"
            onClick={handleReadMore}
            style={{ marginRight: "10px" }}
          >
            Read More
          </Button>
          {data.link && data.type && (
            <Button variant="primary" href={data.link} target="_blank">
              <CgLink />
              { data.type}
            </Button>
          )}
        </Card.Body>
      </Card>

      <Modal
        show={showModal}
        onHide={handleReadLess}
        centered
        size="lg"
        style={{ zIndex: 1000 }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "20px" }}>
          {data.imageLink && (
            <img
              src={data.imageLink}
              alt="card-img"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          )}
          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            {data.description}
          </p>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            borderTop: "1px solid #ccc",
          }}
        >
          <Button
            variant="secondary"
            onClick={handleReadLess}
            style={{ marginRight: "10px" }}
          >
            Read Less
          </Button>
          {data.link && data.type && (
            <Button variant="primary" href={data.link} target="_blank">
              <CgLink /> &nbsp;
              {data.type}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardElement;
