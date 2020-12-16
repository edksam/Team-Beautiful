import React, { useState } from "react";
import logo from "../../images/logo.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

const Home = () => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const initialState = {
    full_time: false,
    part_time: false,
    willing_relocate: false,
    willing_remote: false,
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
      !!checkBoxState.contract ? item.contract === true : true,
    );

  console.log(filteredData);
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
          Check out our graduate directory to see if they may be right fit for
          you
        </p>
        <div className="container ">
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
        </div>
      </div>

      <div className="container d-flex justify-content-space-evenly flex-wrap">
        {filteredData.length > 0 &&
          filteredData.map((obj, _id) => {
            return (
              <div
                className="col  d-flex justify-content-space-evenly mb-5 "
                key={obj._id}
              >
                <div
                  class="row border border-dark mx -3"
                  style={{ width: "25rem" }}
                >
                  <div className="card-body ">
                    <h4 className="float-right">
                      {
                        <Link to={`/graduates/${obj._id}/profile`}>
                          <i class="fas fa-share-square"></i>
                        </Link>
                      }
                    </h4>
                    <h5 class="card-title">{obj.fullname}</h5>
                    <p>Languages:{obj.languages}</p>
                    <p> HeadLine: {obj.headline}</p>
                    <p class="card-text">Location:{obj.current_location}</p>

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
                      <p class="card-text">Resume:{obj.resume}</p>
                      <p class="card-text">LinkedIn:{obj.linkedin}</p>
                      <p class="card-text">Website:{obj.website}</p>
                      <p class="card-text">GitHub:{obj.github}</p>
                      <p class="card-subtitle mb-2 text-dark">
                        {obj.resume_textarea}
                      </p>
                    </ShowMoreText>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
