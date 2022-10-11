import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToInfos } from "../../routes/coordinator";

function HomeScreen() {
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email
    };
    
    axios
      .get(`${BASE_URL}`, body)
  
      console.log(axios)
      .then((response) => {
        console.log(response.data)
        goToInfos(navigate);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }
  

  return (
    <div>
      <h1>Seu email</h1>
      <input
        type="email"
        value={email}
        onChange={onChangeEmail}
        required
      />
      <button onClick={onSubmitLogin}>OK</button>
    </div>
  );
}

export default HomeScreen;
