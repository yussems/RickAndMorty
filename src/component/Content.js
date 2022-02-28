import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../utils/fetchData";


function Content() {
  const { isLoading, error, data } = useQuery("repoData",fetchData)

  if(isLoading){
      return <h1> ... Yükleniyor</h1>
  }
  if(error){
      return <h1>bir sorunla karşılaştım</h1>
  }
console.log(data);

  return <div> </div>;
}

export default Content;
