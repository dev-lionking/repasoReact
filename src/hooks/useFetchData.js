import { useState, useEffect } from "react";
import { fetchData } from "../helpers/FetchData";
const useFetchData = (endPoint) => {
  useState;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(endPoint);
  }, [endPoint]);

  return {
    data,
    isLoading,
  };
};

export default useFetchData;
