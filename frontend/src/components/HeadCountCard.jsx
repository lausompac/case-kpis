import { Graphic } from "./Graphic";
import styled from "styled-components";
import { useEffect } from "react";
import { useOrdenatedUsersPerDate } from "../hooks/useOrdenatedUsersPerDate";

const HeadCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35vw;
  padding: 5vw 2vw;

  background-color: #f2f2f2;

`;

export const HeadCountCard = (users) => {
  useEffect(() => {
    users;
  }, []);

  const allUsers = users.users;

  const activeUsers = allUsers.filter((user) => {
    return user.status === "ativo";
  });

  const activeUsersDate = activeUsers.map((user) => {
    return user.data_admissao;
  });

  const ordenatedUsers = useOrdenatedUsersPerDate(activeUsersDate);

  const data = [
    {
      id: "Headcount",
      color: "hsl(62, 70%, 50%)",
      data: ordenatedUsers.map((date) => {
        return { x: date[0], y: date[1] };
      }),
    },
  ];

  return (
    <HeadCountContainer>
      <h2>Evolução de Headcount</h2>

      <Graphic data={data} />
    </HeadCountContainer>
  );
};
