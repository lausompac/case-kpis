import { useEffect } from "react";
import { useOrdenatedUsersPerDate } from "../../hooks/useOrdenatedUsersPerDate";
import { Graphic } from "../Graphic";

import { HeadCountContainer } from "./styles";

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
