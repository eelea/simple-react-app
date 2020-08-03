import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosGet(url) {
  // const request, and setter we use useState hook
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  // useEffect to exec once
  useEffect(() => {
    setRequest({ loading: true, data: null, error: false });
    axios
      .get(url)
      .then((resp) => {
        setRequest({ loading: false, data: resp.data, error: false });
      })
      .catch((error) => {
        setRequest({ loading: false, data: null, error: true });
      });
  }, [url]);

  return request;
}

export default useAxiosGet;
