import axios from "axios";
import { useEffect, useState } from "react";
import { HeadCountCard } from "../../components/HeadCountCard/HeadCountCard";

import { TurnOverCard } from "../../components/TurnOverCard/TurnOverCard";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPages";
import { InfosContainer } from "./styles";

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
        setUsers(response.data.uniqueUsers);
      })
      .catch((error) => {
        return error.response.data;
      });
  };

  return (
    <InfosContainer>
      <HeadCountCard users={users} />
      <TurnOverCard users={users} />
    </InfosContainer>
  );
}

export default InfoScreen;
