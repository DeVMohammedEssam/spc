import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <Link
        to="/"
        className=" text-dark"
        style={{ position: "absolute", top: "50px", left: "50px", zIndex: 1 }}
      >
        <i className="fas fa-arrow-circle-left mr-3" />
        Back To Home
      </Link>
      <div
        className="d-flex justify-content-center align-items-center p-4 "
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          flexDirection: "column"
        }}
      >
        <i
          className="fas fa-exclamation-triangle fa-10x text-danger"
          style={{ marginTop: "-200px", marginBottom: "200px" }}
        />
        <div className="alert alert-danger w-100 text-center">
          <h2>404 Page Not found !</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
