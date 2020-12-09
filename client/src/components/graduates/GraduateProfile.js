import React from "react";

const GraduateProfile = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="mb-3">
              <label for="fullNameInput" className="form-label">
                Full Name
              </label>
              <input
                placeholder="Enter your full name"
                className="form-control"
                id="fullNameInput"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label for="headlineInput" className="form-label">
                Headline
              </label>

              <input
                placeholder="Enter your headline"
                className="form-control"
                id="headlineInput"
              />
            </div>

            <div className="mb-3">
              <label for="currentLocationInput" className="form-label">
                Current Location
              </label>

              <input
                placeholder="Enter your city"
                className="form-control"
                id="currentLocationInput"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label for="languagesInput" className="form-label">
                Languages
              </label>

              <input
                placeholder="Enter your language"
                type="text"
                className="form-control"
                id="languagesInput"
              />
            </div>

            <label for="workTypeInput" className="form-label">
              Work type
            </label>

            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="workTypeOptions"
                  id="fulltime"
                  value="fullTime"
                />

                <label className="form-check-label" for="fulltime">
                  Full time
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="workTypeOptions"
                  id="parttime"
                  value="partTime"
                />

                <label className="form-check-label" for="parttime">
                  Part time
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="workTypeOptions"
                  id="contract"
                  value="contract"
                />

                <label className="form-check-label" for="contract">
                  Contract
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="workTypeOptions"
                  id="temp"
                  value="temp"
                />

                <label className="form-check-label" for="temp">
                  Temp
                </label>
              </div>

              <br />
              <br />

              <div className="form-check-inline form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="willingRelocate"
                />

                <label className="form-check-label" for="willingRelocate">
                  Willing to relocate
                </label>
              </div>

              <div className="form-check-inline form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="openRemote"
                />
                <label className="form-check-label" for="openRemote">
                  Open to remote work
                </label>
              </div>

            </div>

            <br />

            <div className="mb-3">
              <label for="linkedIn" className="form-label">
                LinkedIn
              </label>

              <input
                placeholder="Enter your linkedin URL"
                type="text"
                className="form-control"
                id="linkedIn"
              />
            </div>

            <div className="mb-3">
              <label for="website" className="form-label">
                Website
              </label>

              <input
                placeholder="Enter your website URL"
                type="text"
                className="form-control"
                id="website"
              />
            </div>

            <br />

            <div class="input-group mb-3">
              <label class="input-group-text" for="fileUpload">
                Upload CV
              </label>

              <input type="file" class="form-control" id="fileUpload" />
            </div>

            <br />




            <h3>Hidden Details</h3>

            <div id="emailHelp" class="form-text">
              We'll never share this information with potential Employers.
            </div>

            <br />

            <div class="mb-3">
              <label for="emailAddress" class="form-label">
                Email address
              </label>

              <input
                type="email"
                class="form-control"
                id="emailAddress"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3">
              <label for="mobilePhoneInput" class="form-label">
                Mobile Phone
              </label>

              <input type="text" class="form-control" id="mobilePhoneInput" />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="" class="form-label">
                Enter Your resume details here
              </label>

              <textarea class="form-control" id="" rows="20"></textarea>
            </div>
            <div class="mb-3 inline">
              <button type="submit" class="btn btn-primary">
                Edit
              </button>
              <button type="submit" class="btn btn-primary">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">
                Preview
              </button>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraduateProfile;
