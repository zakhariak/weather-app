import React from "react";

import "./error-indicator.scss";

const ErrorIndicator = () => {
  return (
    <div className="error-container">
      <p>Something happened!</p>
      <p>We will try to fix it.</p>
    </div>
  );
};

export default ErrorIndicator;
