import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import "./PreviewProfile.css";

const PreviewProfile = ({ id }) => {
  const [graduate, setGraduate] = useState();
  const { _id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/graduates/${_id}`)
      .then((data) => data.json())
      .then((data) => setGraduate(data));
  }, [_id]);
  console.log(graduate, "test");
  if (!graduate) {
    return null;
  }
  return <Example />;

  function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Container>
                <Row className="rows">
                  <Col className="columns">
                    <h1>{graduate.fullname}</h1>
                  </Col>
                </Row>
                <Row className="rows">
                  <Col className="columns">
                    <h2>{graduate.headline}</h2>
                  </Col>
                </Row>
              </Container>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="rows">
              <Col className="columns" lg={2}>
                {graduate.current_location}
              </Col>
              <Col className="columns" lg={5}>
                <Button variant="warning">Open to relocation</Button>
              </Col>
              <Col className="columns" lg={5}>
                <Button variant="primary">Open to remote</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                Available for: Full time: {graduate.full_time}
                Part time: {graduate.part_time}
                Contract: {graduate.contract}
                Temp: {graduate.temp}
              </Col>
            </Row>
            <p>Languages spoken: {graduate.languages}</p>
            <p>
              Working type: {graduate.full_time} {graduate.part_time}{" "}
              {graduate.contract} {graduate.temp}
            </p>

            <hr />

            <Container>
              <Row className="rows">
                <Col xs={6} md={4} className="columns">
                  <i class="fa-fa fa-linkedin"></i>
                  <p>LinkedIn</p>
                </Col>
                <Col className="columns">
                  {/* <Image src="#" roundedCircle /> */}
                  <i class="fas fa-globe"></i>
                  <p>Website</p>
                </Col>
              </Row>
              <Row className="rows">
                <Col xs={6} md={4} className="columns">
                  <i class="fa-lg fa-file"></i>
                  <p>CV</p>
                </Col>
                <Col className="columns">
                  <i class="fa-lg fa-github"></i>
                  <p>GitHub</p>
                </Col>
              </Row>
            </Container>
            <Container>
              <p>{graduate.resume_textarea}</p>
            </Container>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default PreviewProfile;

