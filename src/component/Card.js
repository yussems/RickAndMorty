import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import content from "./content.module.css";
import contentDark from "./dark-mode-style/contentDark.module.css";

function Card({ item }) {
  // const { name, status, species, image } = item;
  const { darkMode } = useSelector((state) => state.mode);

  

  function statusColor() {
    if (item?.status === "Dead") {
      return "red";
    }
    if (item?.status === "Alive") {
      return "green";
    }
    return darkMode ? 'white' :"black";
  }
  return (
    <div style={{cursor:'pointer'}} className={darkMode ? contentDark.box : content.box}>
      <div className={darkMode ? contentDark.boxvalue : content.boxvalue}>
        <p style={darkMode ? {color:'white'}:{color:'black'}}>{item?.species === "Human" ? `Just ${item?.species}` : item?.species}</p>
        <p style={darkMode ? {color:'white'}:{color:'black'}}>{item?.name}</p>
        <div>
          <img className={darkMode?contentDark.image :content.image} src={item?.image} alt="" />
        </div>
        <p style={{ color: statusColor() }}>Status {item?.status}</p>
      </div>
    </div>
  );
}

export default Card;
