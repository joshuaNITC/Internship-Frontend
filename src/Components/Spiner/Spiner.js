import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Spiners = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "50vh" }}
      >
        <Spinner animation="border" variant="primary" />
        &nbsp; Loading...
      </div>
    </>
  );
};

export default Spiners;
