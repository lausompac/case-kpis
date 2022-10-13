import { useEffect } from "react";
import { useOrdenatedUsersPerDate } from "../../hooks/useOrdenatedUsersPerDate";
import { Graphic } from "../Graphic";
import { TurnOverContainer } from "./styles";

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
