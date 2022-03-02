import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../utils/fetchData";
import Card from "./Card";

function Content() {
  const { isLoading, error, data } = useQuery("repoData", fetchData);

  if (isLoading) {
    return <h1> ... Yükleniyor</h1>;
  }
  if (error) {
    return <h1>bir sorunla karşılaştım</h1>;
  }


  return (
    <div>
      {data.data.results.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Content;
