import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToInfos } from "../../routes/coordinator";
import { HomeContainer } from "./styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function HomeScreen() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
      setError(error.response.data.message);
    }
  };

  const onSubmitLogin = () => {
    login()
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToInfos(navigate);
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <HomeContainer>
      <h2>Seu email</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Insira seu email"
          value={email}
          onChange={onChangeEmail}
        />
      </Box>
      <button onClick={onSubmitLogin}>OK</button>
      <p value={error} onChange={(e) => setError(e.target.value)}>
        {error}
      </p>
    </HomeContainer>
  );
}

export default HomeScreen;
