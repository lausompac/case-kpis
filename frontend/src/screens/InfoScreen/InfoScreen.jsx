import axios from "axios";
import { useEffect, useState } from "react";
import { HeadCountCard } from "../../components/HeadCountCard";
import { TurnOverCard } from "../../components/TurnOverCard";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPages";
import styled from "styled-components";

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
`;

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
      <HeadCountCard users={users} />
      <TurnOverCard users={users} />
    </div>
  );
}

export default InfoScreen;
