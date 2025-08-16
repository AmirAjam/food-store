import axios from "@/api/axiosConfig";
import { useState, useCallback } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, method = 'get', body = null, headers = {}) => {
    setError(null);
    try {
      const response = await axios({
        url,
        method,
        ...(method.toUpperCase() === "GET" ? { params: body } : { data: body }),
        headers,
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, sendRequest };
};

export default useFetch;