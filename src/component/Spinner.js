import React from "react";
// import PropTypes from 'prop-types'
import Loading from "./loading.gif";
// import newimg from "./newimg.png"
const Spinner = (props) => {
  return (
    <div className="text-center">
      {/* <img src={Loading} alt="loading" /> */}
      <div className="spinner-border text-secondary" style={{overflow:"none"}} role="status">
        {/* <span className="sr-only"></span> */}
      </div>
    </div>
  );
};

export default Spinner;
