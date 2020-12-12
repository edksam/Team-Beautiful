import React, { useState } from "react";
import logo from "../../images/logo.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Home = ({ id }) => {
  //     const [data, setData] = useState([]);
  //     const [loading, setLoading] = useState(true);
  //     async function fetchUrl() {
  //       const response = await fetch(`http://localhost:3001/api/graduates`);
  //       console.log(response);
  //       const json = await response.json();
  //       setData(json);
  //       setLoading(false);
  //       console.log(data._id)
  //     }
  //     useEffect(() => {
  //       fetchUrl("http://localhost:3001/api/graduates");
  //     }, []);
  //     console.log(data[0]);
  // return [data, loading];
  const [location, setLocation] = useState();
  // const { _id } = useParams();
  let myLocation;
  useEffect(() => {
    fetch(`http://localhost:3001/api/graduates`)
      .then((data) => data.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          myLocation = data[i];

          return setLocation(myLocation);
        }
      });
  }, []);
  console.log(location);

  // let modules= Object.keys(location);
  // console.log(modules);

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

        <div className="container ">
          <div className="form-row">
            <div className="col-3">
              <div class="form-group">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
            <div className="col-8 ml-4">
              <div className="form-col">
                <label class="checkbox-inline mr-3">
                  <input type="checkbox" value="" />
                  Full-Time
                </label>
                <label class="checkbox-inline mr-3">
                  <input type="checkbox" value="" />
                  Part-Time
                </label>
                <label class="checkbox-inline mr-3">
                  <input type="checkbox" value="" />
                  Internship
                </label>
              </div>
              <div className="form-col">
                <label class="checkbox-inline mr-3">
                  <input type="checkbox" value="" />
                  Remote
                </label>
                <label class="checkbox-inline mr-3">
                  <input type="checkbox" value="" />
                  Relocate
                </label>
                <label class="checkbox-inline mr-3">
                  <input type="checkbox" value="" />
                  Temp/Contract
                </label>
              </div>
            </div>
          </div>
          {/* <div className="container">
    <div class="form-group">
          <input/>
    </div>
        <div class="form-group">
              <input/>
        </div>

  </div>
      <div className="form-col">


              <div className="form-col">
                  <label class="checkbox-inline"><input type="checkbox" value=""/>Option 1</label>
                  <label class="checkbox-inline"><input type="checkbox" value=""/>Option 2</label>
                   <label class="checkbox-inline"><input type="checkbox" value=""/>Option 3</label>
              </div>
              <div className="form-col">
                  <label class="checkbox-inline"><input type="checkbox" value=""/>Option 1</label>
                  <label class="checkbox-inline"><input type="checkbox" value=""/>Option 2</label>
                   <label class="checkbox-inline"><input type="checkbox" value=""/>Option 3</label>
              </div>
      </div> */}
        </div>
      </div>

      <div className="container">
        <div className="form-inline  d-flex justify-content-between">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title"> Card Title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Read More
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
