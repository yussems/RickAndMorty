import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../utils/fetchData";
import Card from "./Card";
import content from "./content.module.css";

function Content() {
  const { isLoading, error, data } = useQuery("repoData", fetchData);

  if (isLoading) {
    return <h1> ... Yükleniyor</h1>;
  }
  if (error) {
    return <h1>bir sorunla karşılaştım</h1>;
  }

  return (
    <main className={content.boxcontainer}>
      {data.data.results.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
}

export default Content;
