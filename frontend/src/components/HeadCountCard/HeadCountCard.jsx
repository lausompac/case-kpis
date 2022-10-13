import { useEffect } from "react";
import { useOrdenatedUsersPerDate } from "../../hooks/useOrdenatedUsersPerDate";
import { Graphic } from "../Graphic";
import { months } from "./months";

import { HeadCountContainer } from "./styles";

export const HeadCountCard = (users) => {
  useEffect(() => {
    users;
  }, []);

  const allUsers = users.users;

  const inactiveUsers = allUsers.filter((user) => {
    return user.status === "inativo";
  });

  //Lógica de HeadCount não implementada por falta de tempo

  for (let i = 0; i < inactiveUsers.length; i++) {

    const contractTimePerUser = inactiveUsers.map((user) => {
      return [user.data_admissao, user.data_rescisao];
    });

    const contractTimePerUserMonth = inactiveUsers.map((user) => {
      return [user.data_admissao.slice(3), user.data_rescisao.slice(3)];
    });

    const monthsActive = contractTimePerUser.map((user) => {
      const [admissionDate, dismissalDate] = user;
      const [admissionDay, admissionMonth, admissionYear] =
        admissionDate.split("/");
      const [dismissalDay, dismissalMonth, dismissalYear] =
        dismissalDate.split("/");
      const monthsActive =
        (dismissalYear - admissionYear) * 12 +
        (dismissalMonth - admissionMonth);
      return monthsActive;
    });

    const inactiveCounter = (
      contractTimePerUserMonth,
      monthsActive,
      months
    ) => {
      const findFirstMonth = contractTimePerUserMonth.map((period) => {
        return period[0];
      });

      const incrementFirstMonth = findFirstMonth.map((month) => {
        const index = months.results.findIndex((item) => item.month === month);
        let indexInMonths = months.results[index];
        indexInMonths.activeUsers = 1;
        let monthsToIncrement = monthsActive[i] - 1;
        for (let i = 0; i < monthsToIncrement; i++) {
          const teste = (indexInMonths.activeUsers =
            indexInMonths.activeUsers + 1);
          indexInMonths = months.results[index + i];
        }

        return indexInMonths;
      });

      console.log(incrementFirstMonth);
    };

    inactiveCounter(contractTimePerUserMonth, monthsActive, months);
  }

  //

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
      <h2>Contratações</h2>

      <Graphic data={data} />
    </HeadCountContainer>
  );
};
