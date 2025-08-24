import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageUnderConstruction.scss";

const PageUnderConstruction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="under-construction-container">
      <h1 className="heading">🚧 Page Under Construction</h1>
      <p className="sub-text">
        We're working hard to bring this page to life. Please check back later!
      </p>

      <div className="button-group">
        {/* <button className="btn1" onClick={() => navigate("/")}>
          Home
        </button> */}
        <button className="btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
