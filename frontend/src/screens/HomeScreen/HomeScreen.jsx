import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToInfos } from "../../routes/coordinator";
import { HomeContainer } from "./styles";

function HomeScreen() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email,
    };

    axios
      .post(`${BASE_URL}/login`, body)

      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        goToInfos(navigate);
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };

  return (
    <HomeContainer>
      <h2>Seu email</h2>
      <input type="email" value={email} onChange={onChangeEmail} required />
      <button onClick={onSubmitLogin}>OK</button>
    </HomeContainer>
  );
}

export default HomeScreen;
