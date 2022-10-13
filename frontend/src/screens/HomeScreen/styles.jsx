import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;

  h2 {
    margin-bottom: 10px;
  }

  input {
    width: 250px;
    height: 40px;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 0 10px;
    margin-bottom: 10px;

    :focus {
      outline: 1px solid gray;
    }
  }

  button {
    width: 40px;
    height: 25px;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: #f2f2f2;
    cursor: pointer;

    :hover {
      background-color: #e6e6e6;
    }
  }

  p {
    margin-top: 10px;
    color: red;
  }
`;
