import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col} from "react-bootstrap";
import ShowMoreText from "react-show-more-text";

function extractHostname(url) {
  var hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
      hostname = url.split('/')[2];
  }
  else {
      hostname = url.split('/')[0];
  }

  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}
function extractRootDomain(url) {
  var domain = extractHostname(url),
      splitArr = domain.split('.'),
      arrLen = splitArr.length;

  //extracting the root domain here
  //if there is a subdomain
  if (arrLen > 2) {
      domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
      //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
      if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
          //this is using a ccTLD
          domain = splitArr[arrLen - 3] + '.' + domain;
      }
  }
  return domain;
}

const GraduateInformationDisplay = () => {

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  const [graduate, setGraduate] = useState();
  const { _id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/graduates/${_id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setGraduate(data);
      });
  }, [_id]);

  console.log(graduate, "------");

  if (!graduate) {
    return null;
  }
  return (
    <Modal.Dialog className="border-dark">
      <Modal.Header>
        <Modal.Title>
          <Container>
            <Row className="rows">
              <Col className="columns">
                <h1 className="display-4">{graduate.fullname}</h1>
              </Col>
            </Row>
            <Row className="rows">
              <Col className="columns">
                <h4>{graduate.headline}</h4>
              </Col>
            </Row>
          </Container>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="rows ">
          <Col className="columns " sm={5}>
            Location: {graduate.current_location}
          </Col>

          <Button size="sm" variant="warning" className="mr-2">
            Open to relocation
          </Button>

          <Button variant="success" size="sm">
            Open to remote
          </Button>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col>

           {graduate.full_time ? "Full Time" : ""}
            {graduate.part_time ?"Part Time" : ""}
           {graduate.contract ? "Contract" :""}
           {graduate.temp ? "Temp" : ""}
          </Col>
        </Row>

        <p class="font-italic">Languages: {graduate.languages}</p>
        <hr />
        <Container className="justify-content-center">
          <Row className="rows">
            {" "}
            <hr />
            <Col xs={6} md={4} className="col-xs-6 mr-5 mb-3">
              <i class="fab fa-linkedin fa-2x"></i>
              <a className="ml-2" style={{ fontSize: "65%" }} target= "_blank" rel="noreferrer" href={"http://" + graduate.linkedin}>
                linkedIn
              </a>
            </Col>
           <Col className="col-xs-4 ">
              <i class="fas fa-globe fa-2x"></i>
              <a className="ml-2" style={{ fontSize: "70%" }} href={"http://"+ graduate.website}>
                website
              </a>
            </Col>
          </Row>
          <Row className="rows">
            <hr />
        <Col xs={6} md={4} className="columns mr-5">
              <i class="fas fa-file-csv fa-2x"></i>
              <a className="ml-2" style={{ fontSize: "80%" }} href ={graduate.upload_cv}>
                cv
              </a>
            </Col>
        <Col className="columns">
              <i class="fab fa-github fa-2x"></i>
              <a className="ml-2" style={{ fontSize: "70%" }} href={"http://"+ graduate.github}>
                github
              </a>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          
          <p>{graduate.resume_textarea}</p>
        </Container>
      </Modal.Body>
    </Modal.Dialog>
  );
};
export default GraduateInformationDisplay;
