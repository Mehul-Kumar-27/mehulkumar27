import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgLink } from "react-icons/cg";

function CardElement() {
    const data = {
        imgagelink: "https://via.placeholder.com/300",
        title: "Project Alpha",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        link: "https://example.com",
        type: "Learn More",
    };
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
            <Card className="project-card-view" style={{ width: "300px", height: "400px" }}>
                {data.imgagelink && (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Card.Img
                            variant="top"
                            src={data.imgagelink}
                            alt="card-img"
                            style={{ width: "300px", height: "200px", objectFit: "cover" }}
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
                    <Button variant="link" onClick={handleReadMore}>
                        Read More
                    </Button>
                    {data.link && data.type && (
                        <Button variant="primary" href={data.link} target="_blank">
                            <CgLink /> &nbsp;
                            {data.type}
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
                <Modal.Body>
                    <img src={data.imgagelink} alt="card-img" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                    <p style={{ textAlign: "justify" }}>{data.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReadLess}>
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
