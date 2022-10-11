import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
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
      .post(`${BASE_URL}/login`, body)
  
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
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
