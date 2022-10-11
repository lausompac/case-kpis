import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPages";

function InfoScreen() {
  useProtectedPage();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
    
  const getUsers = () => {
    axios
      .get(`${BASE_URL}`, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data.uniqueUsers);
        setUsers(response.data.uniqueUsers);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <h1>Info Screen</h1>
    </div>
  );
}

export default InfoScreen;
