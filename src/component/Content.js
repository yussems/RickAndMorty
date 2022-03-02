import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../utils/fetchData";
import Card from "./Card";
import content from "./content.module.css";
import loading from "../assets/loadingİmage.jpg";
import errorImage from "../assets/error.jpg";
import Error from "./Error-loading/Error";

function Content() {
  const { isLoading, data, isError } = useQuery(
    "rick-morty",
    fetchData
  );
  return (
    <main className={content.boxcontainer}>
      {isLoading && <Error image={loading} text={"Loading..."} />}
      {isError && <Error image={errorImage} text={"404 Hatası aldım"} />}

      {data?.data.results.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
}

export default Content;
