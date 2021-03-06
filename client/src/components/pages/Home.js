import React, { useState } from "react";
import "../../bootstrap.min.css";
import "../../index.css";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import useGraduateData from "../utility/useGraduateData";

const Home = () => {
  const graduates = useGraduateData();
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const initialState = {
    full_time: false,
    part_time: false,
    willing_relocate: false,
    willing_remote: false,
    internship: false,
    contract: false,
    editVisibles: {},
  };
  const [data, setData] = useState([]);
  const [checkBoxState, setCheckboxState] = useState(initialState);
  const {
    full_time,
    part_time,
    willing_relocate,
    willing_remote,
    contract,
    internship,
  } = checkBoxState;

  let filteredData = data;
  let languageData = data;

  useEffect(() => {
    fetch(`http://localhost:3001/api/graduates`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleLocation = (event) => {
    setLocation(event.target.value);
    console.log(location);

    console.log(filteredData);
  };

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
    console.log(language);

    console.log(languageData);
  };

  const handleCheckBox = (event) => {
    setCheckboxState({
      ...checkBoxState,
      [event.target.name]: !checkBoxState[event.target.name],
    });
  };

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  filteredData = data
    .filter((loc) =>
      loc.current_location.toLowerCase().includes(location.toLowerCase()),
    )
    .filter((lang) =>
      lang.languages.toLowerCase().includes(language.toLowerCase()),
    )
    .filter((item) =>
      !!checkBoxState.full_time ? item.full_time === true : true,
    )
    .filter((item) =>
      !!checkBoxState.part_time ? item.part_time === true : true,
    )
    .filter((item) =>
      !!checkBoxState.willing_relocate ? item.willing_relocate === true : true,
    )
    .filter((item) =>
      !!checkBoxState.willing_remote ? item.willing_remote === true : true,
    )
    .filter((item) =>
      !!checkBoxState.internship ? item.internship === true : true,
    )
    .filter((item) =>
      !!checkBoxState.contract ? item.contract === true : true,
    );

  console.log(filteredData);
  return (
    <>
      <div className="container-fluid">
        <div className="jumbotron text-center">
          <h1 className="display-3">Graduate Directory</h1>
          <p className="lead">
            Our amazing and talented graduates are looking for new
            opportunities. Check out our graduate directory to see if they may
            be right fit for you
          </p>

          <hr className="my-4" />
          <Container>
            <Row>
              <Col sm>
                <div>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Location
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Search"
                      aria-describedby="inputGroup-sizing-default"
                      name="location"
                      value={location}
                      onChange={handleLocation}
                      placeholder="Search Location"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Language
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Search Language"
                      aria-describedby="inputGroup-sizing-default"
                      name="Language"
                      value={language}
                      onChange={handleLanguage}
                      placeholder="Search Languages"
                    />
                  </InputGroup>
                </div>
              </Col>
              <Col sm>
                <div class="form-group col-sm-4">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="full_time"
                      name="full_time"
                      value={full_time}
                      onChange={handleCheckBox}
                    />
                    <label class="custom-control-label" for="full_time">
                      Fulltime
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="part_time"
                      name="part_time"
                      value={part_time}
                      onChange={handleCheckBox}
                    />
                    <label class="custom-control-label" for="part_time">
                      Part time
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="internship"
                      name="internship"
                      value={internship}
                      onChange={handleCheckBox}
                    />
                    <label class="custom-control-label" for="internship">
                      Internship
                    </label>
                  </div>
                </div>
              </Col>
              <Col sm>
                <div class="form-group col-sm-4">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="remote"
                      name="willing_remote"
                      value={willing_remote}
                      onChange={handleCheckBox}
                    />
                    <label class="custom-control-label" for="remote">
                      Remote
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="relocate"
                      name="willing_relocate"
                      value={willing_relocate}
                      onChange={handleCheckBox}
                    />
                    <label class="custom-control-label" for="relocate">
                      Relocate
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      id="contract"
                      class="custom-control-input"
                      name="contract"
                      value={contract}
                      type="checkbox"
                      onChange={handleCheckBox}
                    />
                    <label class="custom-control-label" for="contract">
                      Temp / Contract
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          {/* <div className="container ">
            <div className="form-row">
              <div className="col-3">
                <div class="form-group">
                  <input
                    class="form-control mr-sm-2"
                    type="text"
                    name="Location"
                    value={location}
                    onChange={handleLocation}
                    placeholder="Location"
                    aria-label="Search"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control mr-sm-2"
                    type="text"
                    placeholder="Language"
                    aria-label="Search"
                    value={language}
                    onChange={handleLanguage}
                  />
                </div>
              </div>
              <div className="col-8 ml-4">
                <div className="form-col">
                  <label class="checkbox-inline mr-3">
                    <input
                      type="checkbox"
                      name="full_time"
                      value={full_time}
                      onChange={handleCheckBox}
                    />
                    Full-Time
                  </label>
                  <label class="checkbox-inline mr-3">
                    <input
                      type="checkbox"
                      name="part_time"
                      value={part_time}
                      onChange={handleCheckBox}
                    />
                    Part-Time
                  </label>
                  <label class="checkbox-inline mr-3">
                    <input
                      type="checkbox"
                      // name="internship"
                      // value={internship}
                    />
                    Internship
                  </label>
                </div>
                <div className="form-col">
                  <label class="checkbox-inline mr-3">
                    <input
                      type="checkbox"
                      name="willing_remote"
                      value={willing_remote}
                      onChange={handleCheckBox}
                    />
                    Remote
                  </label>
                  <label class="checkbox-inline mr-3">
                    <input
                      name="willing_relocate"
                      value={willing_relocate}
                      onChange={handleCheckBox}
                      type="checkbox"
                    />
                    Relocate
                  </label>
                  <label class="checkbox-inline mr-3">
                    <input
                      name="contract"
                      value={contract}
                      type="checkbox"
                      onChange={handleCheckBox}
                    />
                    Temp/Contract
                  </label>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="container main">
        <div className="container d-flex justify-content-space-evenly flex-wrap">
          {filteredData.length > 0 &&
            filteredData.map((graduate, _id) => {
              return (

                <div
                  className="col d-flex justify-content-space-evenly mb-5 "
                  key={graduate._id}
                >
                  <div
                    class="row border border-dark mx -3"
                    style={{ width: "25rem" }}
                  >
                    <div className="card-body ">
                      <h4 className="float-right">
                        {
                          <Link to={`/graduates/${graduate._id}/profile`}>
                            <i class="fas fa-share-square"></i>
                          </Link>
                        }
                      </h4>
                      <h5 class="card-title">{graduate.fullname}</h5>
                      <p>Languages:{graduate.languages}</p>
                      <p> HeadLine: {graduate.headline}</p>
                      <p class="card-text">Location:{graduate.current_location}</p>

                      <ShowMoreText
                        lines={3}
                        more={
                          <button type="button" class="btn btn-primary btn-sm">
                            Show more
                          </button>
                        }
                        less={
                          <button type="button" class="btn btn-primary btn-sm">
                            Show less
                          </button>
                        }
                        className="content-css"
                        anchorClass="my-anchor-css-class"
                        onClick={executeOnClick}
                        expanded={false}
                        width={350}
                      >
                        <p class="card-text">Resume:{graduate.resume}</p>
                        <p class="card-text">LinkedIn:{graduate.linkedin}</p>
                        <p class="card-text">Website:{graduate.website}</p>
                        <p class="card-text">GitHub:{graduate.github}</p>
                        <p class="card-subtitle mb-2 text-dark">
                          {graduate.resume_textarea}
                        </p>
                      </ShowMoreText>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div> */}
      {/* <Footer /> */}

      <div>
        <div className="container">
          <div className="row mb-2">
            {filteredData.map((graduate) => {
              return (
                <div className="col-md-6 card-text-left border-success">
                  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
                    <div className="col p-4 d-flex flex-column">
                      <strong className="d-inline-block mb-2 text-success">
                        <h4 className="float-right">
                          {
                            <Link to={`/graduates/${graduate._id}/profile`}>
                              <i class="fas fa-share-square"></i>
                            </Link>
                          }
                        </h4>
                        <h3>{graduate.fullname}</h3>
                      </strong>

                      <h3 className="mb-0">{graduate.headline}</h3>
                      <div className="mb-1 text-muted">
                        {graduate.current_location}
                      </div>
                      <div className="mb-1 text-muted">
                        Languages : {graduate.languages}
                      </div>
                      <div class="row justify-content-around">
                        <p>
                          {graduate.willing_remote ? (
                            <button type="button" class="btn btn-success">
                              Can Work Remote
                            </button>
                          ) : (
                            <button type="button" class="btn btn-warning">
                              Can't Work Remote
                            </button>
                          )}
                        </p>
                        <p>
                          {graduate.willing_relocate ? (
                            <button type="button" class="btn btn-success">
                              Can Relocate
                            </button>
                          ) : (
                            <button type="button" class="btn btn-warning">
                              Can't Relocate
                            </button>
                          )}
                        </p>
                      </div>
                      <div className="row justify-content-around">
                        <p class="card-text">
                          {graduate.full_time ? "Full Time" : ""}
                        </p>
                        <p class="card-text">
                          {graduate.part_time ? "Part Time" : ""}
                        </p>
                        <p class="card-text">
                          {graduate.willing_relocate ? "Open to Relocate" : ""}
                        </p>
                        <p class="card-text">
                          {graduate.willing_remote ? "Open to Remote" : ""}
                        </p>
                      </div>

                      <hr />

                      <div className="container">
                        <div class="row justify-content-around ">
                          <div class="col-4">
                            <i class="fab fa-linkedin fa-2x"></i>

                            <Link
                              className="ml-2"
                              style={{ fontSize: "65%" }}
                              target="_blank"
                              rel="noreferrer"
                              href={""}
                            >
                              LinkedIn
                            </Link>
                          </div>
                          <div class="col-4 mt-1">
                            <i class="fas fa-globe fa-2x"> </i>

                            <Link
                              className="ml-2"
                              style={{ fontSize: "70%" }}
                              to={graduate.linkedin}
                            >
                              Website
                            </Link>
                          </div>
                        </div>

                        <div class="row justify-content-around  ">
                          <div class="col-4 ">
                            <i class="fas fa-file-csv fa-2x"></i>
                            <Link className="ml-2" style={{ fontSize: "80%" }}>
                              cv
                            </Link>
                          </div>
                          <div class="col-4 mt-1">
                            <i class="fab fa-github fa-2x"></i>
                            <a className="ml-2" style={{ fontSize: "70%" }}>
                              {" "}
                              GitHub
                            </a>
                          </div>
                        </div>
                      </div>

                      <p className="mb-0">{graduate.resume_textarea}</p>
                      <Link href="#" className="stretched-link">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

// const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className="text-center py-3">
//             Copyright &copy; 2020 Code Your Future
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

export default Home;
