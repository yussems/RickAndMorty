import React from "react";
import { useSelector } from "react-redux";
import content from "./content.module.css";
import contentDark from "./dark-mode-style/contentDark.module.css";

function Card({ item }) {
  const { name, status, species, image } = item;
  const { darkMode } = useSelector((state) => state.mode);

  function statusColor() {
    if (status === "Dead") {
      return "red";
    }
    if (status === "Alive") {
      return "green";
    }
    return darkMode ? 'white' :"black";
  }
  return (
    <div className={darkMode ? contentDark.box : content.box}>
      <div className={darkMode ? contentDark.boxvalue : content.boxvalue}>
        <p>{species === "Human" ? `Just ${species}` : species}</p>
        <p>{name}</p>
        <div>
          <img className={darkMode?contentDark.image :content.image} src={image} alt="" />
        </div>
        <p style={{ color: statusColor() }}>Status {status}</p>
      </div>
    </div>
  );
}

export default Card;
