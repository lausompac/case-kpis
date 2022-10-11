import axios from "axios";
import { useEffect, useState } from "react";

function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`${url} `, body)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [url]);

  return data;
}

export default useRequestData;