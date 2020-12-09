import React, { useState, useEffect } from "react";
import { get } from "axios";
import { Link } from "react-router-dom";

const GraduateList = () => {
  const [graduates, setGraduates] = useState([]);

  useEffect(function () {
    async function getGraduates() {
      try {
        const response = await get("/api/graduates");
        setGraduates(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getGraduates();
  }, []);

  return (
    <div>
      <h2>
        Graduates
        <Link to="/graduates/new" className="btn btn-primary float-right">
          Create Graduates
        </Link>
      </h2>
      <hr />
      {graduates.map((graduate) => {
        return (
          <div key={graduate._id}>
            <h4>
              <Link to={`/graduates/${graduate._id}`}>{graduate.fullname}</Link>
            </h4>
            <small>_id: {graduate._id}</small>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default GraduateList;
