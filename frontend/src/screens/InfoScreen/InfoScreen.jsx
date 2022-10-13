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
  const [year, setYear] = useState("2022");

  useEffect(() => {
    getUsers();
  }, []);

  const handleYear = (event) => {
    setYear(event.target.value);
  };

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
        console.log(error.response.data);
      });
  };

  return (
    <InfosContainer>
      <select onChange={handleYear}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>

      <HeadCountCard users={users} year={year} />
      <TurnOverCard users={users} year={year} />
    </InfosContainer>
  );
}

export default InfoScreen;
