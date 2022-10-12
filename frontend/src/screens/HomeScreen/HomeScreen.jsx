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

  const login = async () => {
    const body = {
      email,
    };

    try {
      return await axios.post(`${BASE_URL}/login`, body);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitLogin = () => {
    login()
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToInfos(navigate);
      })
      .catch((err) => {
        console.log(err);
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
