import React from "react";
import content from "./content.module.css";

function Card({ item }) {
  const { name, status, species, image } = item;
  
  function statusColor() {
    if(status==='Dead') {
      return 'red'
    }
    if(status==='Alive') {
      return 'green'
    }
    return 'black'
  }
  return (
    <div className={content.box}>
      <div className={content.boxvalue}>
        <p>{species === "Human" ? `Just ${species}` : species}</p>
        <p>{name}</p>
        <div>
          <img className={content.image} src={image} alt="" />
        </div>
        <p style={{color: statusColor()}}>Status  {status}</p>
      </div>
    </div>
  );
}

export default Card;
