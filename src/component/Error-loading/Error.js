import React from "react";
import errorStyles from "./error.module.css";
function Error({ image, text }) {
  return (
    <div className={errorStyles.loading}>
      <h3>{text}</h3>
      <img className={errorStyles.loadingImage} src={image} alt="loading" />
    </div>
  );
}

export default Error;
