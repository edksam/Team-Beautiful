import React, { useState } from "react";
import logo from "../../images/logo.png";
import axios from "axios";
import { useEffect } from "react";

const Home = ({ graduate }) => {
  const [optionLocation, setOptionLocation] = useState("");
  const [optionLanguages, setOptionLanguages] = useState("");
  const [optionTypes, setOptionTypes] = useState("");
  const [getOptions, setGetOptions] = useState("");

 ;

  // const handleChangeLocation = (event) => {
  //   setOptionLocation(event.target.value);
  // };

  // const handleChangeLanguages = (event) => {
  //   setOptionLanguages(event.target.value);
  // };
  // const handleChangeTypes = (event) => {
  //   setOptionTypes(event.target.value);
  // };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/graduates/`)
      .then((response) => {
        setGetOptions(response.data);
        console.log(response);
      })
      .catch((error) => {
        //Do something in case of error
      });
  }, []);
  console.log("----------");
  console.log(getOptions);
  console.log("----------")

  return (

    <div className="container-fluid navbar-expand-lg">
      <div className="card-header container-fluid">
        <img
          className="logo bg-light rounded"
          src={logo}
          alt="header-logo"
          style={{ width: "5rem" }}
        />
        <div className="d-flex justify-content-end">
          <h6 className="mr-4">CYF Login</h6>
          <h6>Student Login</h6>
        </div>
      </div>

      <div className="container">
        <h4 className="display-3">Graduates Directory</h4>
        <p>
          Our amazing and talented graduates are looking for new opportunities.
          Check out our graduate directory to see if they may be the fit for
          you.
        </p>

        <div className="input-group d-flex justify-content-between">
          <div class="form-group">
            <select
              class="form-control"
              id="sel1"
              value={optionLocation}
              // onChange={handleChangeLocation}
            >
              <option>All Location</option>
              {/* {
            getOptions.map(([key, value], i) => (
              <option key={i}>{key}</option>
            ))} */}
            </select>
          </div>
          <div class="form-group">
            <select
              class="form-control"
              id="sel1"
              value={optionLanguages}
              // onChange={handleChangeLanguages}
            >
              <option>Languages</option>
              {/* {
            graduate.map(([key, value], i) => (
              <option key={i}>{key}</option>
            ))} */}
            </select>
          </div>
          <div class="form-group">
            <select
              class="form-control"
              id="sel1"
              value={optionTypes}
              // onChange={handleChangeTypes}
            >
              <option>All Types</option>
              {/* {
            graduate.map(([key, value], i) => (
              <option key={i}>{key}</option>
            ))} */}
            </select>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-around">
        <div className="form-inline">
          <div className="form-inline mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="willingRelocate"
              name="wiling_relocate"
              // value={graduate.willing_relocate}
              // onChange={handleChange}
            />

            <label className="form-check-label" for="willingRelocate">
              Willing to relocate
            </label>
          </div>
          <div className="form-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="openRemote"
              name="willing_remote"
              // value={graduate.willing_remote}
              // onChange={handleChange}
            />

            <label className="form-check-label" for="openRemote">
              Open to remote work
            </label>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="form-inline  d-flex justify-content-between">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
