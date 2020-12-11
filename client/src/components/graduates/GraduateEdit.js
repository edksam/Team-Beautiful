import React, { useState, useEffect } from "react";
import { get, patch } from "axios";

function GraduateEdit(props) {
  const initialState = {
    fullname: "",
    headline: "",
    current_location: "",
    languages: "",
    full_time: false,
    part_time: false,
    contract: false,
    temp: false,
    willing_relocate: false,
    willing_remote: false,
    linkedin: "",
    upload_cv: "",
    resume_textarea: "",
    website: "",
    mobile: "",
  };
  const [graduate, setgraduate] = useState(initialState);

  useEffect(
    function () {
      async function getgraduate() {
        try {
          const response = await get(
            `/api/graduates/${props.match.params._id}`,
          );
          setgraduate(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getgraduate();
    },
    [props],
  );

  function handleSubmit(event) {
    event.preventDefault();
    async function updategraduate() {
      try {
        await patch(`/api/graduates/${graduate._id}`, graduate);
        props.history.push(`/graduates/${graduate._id}`);
      } catch (error) {
        console.log(error);
      }
    }
    updategraduate();
  }

  function handleChange(event) {
    setgraduate({ ...graduate, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    props.history.push(`/graduates/${graduate._id}`);
  }

  return (
    <div>
      <h1>Edit {graduate.title}</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full name</label>
          <input
            type="text"
            name="title"
            value={graduate.fullname}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <textarea
            name="content"
            rows="5"
            value={graduate.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default GraduateEdit;
