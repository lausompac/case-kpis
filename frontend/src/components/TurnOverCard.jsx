import { useEffect } from "react";
import styled from "styled-components";
import { useOrdenatedUsersPerDate } from "../hooks/useOrdenatedUsersPerDate";
import { Graphic } from "./Graphic";

const TurnOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35vw;
  padding: 5vw 2vw;
  background-color: #f2f2f2;
`;
export const TurnOverCard = (users) => {
  useEffect(() => {
    users;
  }, []);

  const allUsers = users.users;

  const inactiveUsers = allUsers.filter((user) => {
    return user.status === "inativo";
  });

  const inactiveUsersDate = inactiveUsers.map((user) => {
    return user.data_rescisao;
  });

  const ordenatedUsers = useOrdenatedUsersPerDate(inactiveUsersDate);

  const data = [
    {
      id: "Turnover",
      color: "hsl(0, 70%, 50%)",
      data: ordenatedUsers.map((date) => {
        return { x: date[0], y: date[1] };
      }),
    },
  ];

  return (
    <TurnOverContainer>
      <h2>Evolução de Turnover</h2>
      <Graphic data={data} />
    </TurnOverContainer>
  );
};
