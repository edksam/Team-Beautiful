import React from "react";

const Home = () => {
  return (
    <div className="jumbotron vertical-center jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Graduate Directory</h1>
        <p>
          Our amazing and talented graduates are looking for new opportunities.
          Check out our graduate directory to see if they may be the fit for
          you.
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="/graduates" role="button">
            Learn more &raquo;
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
