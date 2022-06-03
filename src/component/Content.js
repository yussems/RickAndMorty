import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../utils/fetchData";
import Card from "./Card";
import content from "./content.module.css";
import contentDark from "./dark-mode-style/contentDark.module.css";
import loading from "../assets/loadingİmage.jpg";
import errorImage from "../assets/error.jpg";
import Error from "./Error-loading/Error";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Content() {
  const { isLoading, data, isError } = useQuery("rick-morty", fetchData);
  const { darkMode } = useSelector((state) => state.mode);

  return (
    <main
      className={darkMode ? contentDark.boxcontainer : content.boxcontainer}
    >
      {isLoading && <Error image={loading} text={"Loading..."} />}
      {isError && <Error image={errorImage} text={"404 Hatası aldım"} />}

      {data?.data.results.map((item) => (
        <Link to={`index/${item.id}`} key={item.id}>
          <Card  item={item} />
        </Link>
      ))}
    </main>
  );
}

export default Content;
