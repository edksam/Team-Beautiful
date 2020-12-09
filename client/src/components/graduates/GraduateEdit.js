import React, { useState, useEffect } from "react";
import { get } from "axios";

const GraduateEdit = () => {
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
      <h1>Edit Graduate Details</h1>
    </div>
  );
};

export default GraduateEdit;
