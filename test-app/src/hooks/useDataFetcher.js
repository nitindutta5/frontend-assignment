import { useEffect, useState } from "react";
import { fetchWrapper } from "../utils";

export const useDataFetcher = (API_URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await fetchWrapper(API_URL);
        setData(result);
      } catch (error) {
        console.error("Error in GET Request:", error.message);
      } finally{
        setLoading(false); 
      }
    })();
    return () => {};
  },[API_URL]);

  return {data, loading}
};
