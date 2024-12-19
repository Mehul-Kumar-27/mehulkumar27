import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew({ pdfUrl = "" }) {
  const [width, setWidth] = useState(1200);
  const [error, setError] = useState(null);

  // Convert Google Drive view URL to embedded viewer URL
  const getEmbedUrl = (driveUrl) => {
    if (!driveUrl) {
      setError("Please provide a valid Google Drive URL");
      return "";
    }

    try {
      // Extract file ID from Google Drive URL
      const fileId = driveUrl.match(/[-\w]{25,}/);
      if (!fileId) {
        setError("Invalid Google Drive URL format");
        return driveUrl;
      }

      // Create embed URL
      return `https://drive.google.com/file/d/${fileId[0]}/preview`;
    } catch (err) {
      setError("Error processing URL");
      return "";
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    // Add window resize listener
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const embedUrl = getEmbedUrl(pdfUrl);

  if (error) {
    return (
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="text-danger">{error}</div>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {pdfUrl && (
            <Button
              variant="primary"
              href={pdfUrl}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          )}
        </Row>

        <Row className="resume">
          {embedUrl && (
            <iframe
              src={embedUrl}
              width="100%"
              height="800px"
              style={{ border: 'none' }}
              allowFullScreen
              title="Resume PDF"
            />
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {pdfUrl && (
            <Button
              variant="primary"
              href={pdfUrl}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
