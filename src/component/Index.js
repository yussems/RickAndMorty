import React from "react";

import { useQuery } from "react-query";
import { fetchQueryData } from "../utils/fetchData";
import { useParams } from "react-router-dom";

//component
import Card from "./Card";

//css
import route from "./index.module.css";

// redux
import { useSelector } from "react-redux";

//error Handlibg
import loading from "../assets/loadingİmage.jpg";
import errorImage from "../assets/error.jpg";
import Error from "./Error-loading/Error";

function Index() {
  let { id } = useParams();
  const { darkMode } = useSelector((state) => state.mode);

  const { isLoading, data, isError } = useQuery(["rick-morty", id], () =>
    fetchQueryData(id)
  );


  if(isError){
    return <Error image={errorImage} text={"404 Hatası aldım"} />
  }
  

  if(isLoading){
    return <Error image={loading} text={"Loading..."} />
  }
  
  return (
    <div
      className={route.bodyColor}
      style={
        darkMode
          ? { color: "white", backgroundColor: "#333333" }
          : { color: "black", backgroundColor: "white" }
      }
    >
      <div className={route.container}>
        <div className={route.leftPlace}>
          <Card item={data?.data} />
        </div>

        <div className={route.rightPlace}>
          <div>
            <p>
              <span>Created Time :</span> {data?.data.created}
            </p>
            <p>
              {" "}
              <span>Gender:</span> {data?.data.gender}
            </p>
            <p>
              <span>Location :</span>
              {data?.data.location.name}
            </p>
            <p>
              <span>Origin -</span>
              {data?.data.origin.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
