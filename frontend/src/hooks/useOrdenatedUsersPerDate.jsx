export const useOrdenatedUsersPerDate = (array) => {
  const usersDateArray = array.map((date) => {
    return date.split("/");
  });

  const userDateFormatedString = usersDateArray.map((date) => {
    return date[2] + "-" + date[1] + "-" + date[0];
  });

  const formatedDate = userDateFormatedString.map((date) => {
    return new Date(date);
  });

  const formatedDate2 = formatedDate.map((date) => {
    return new Date(date.setDate(date.getDate() + 1));
  });

  const usersPerMonth = formatedDate2.reduce((acc, date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const key = `${month}/${year}`;
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key]++;
    return acc;
  }, []);

  const ordenatedUsers = Object.entries(usersPerMonth).sort(
    (a, b) => {
      const [monthA, yearA] = a[0].split("/");
      const [monthB, yearB] = b[0].split("/");
      if (yearA !== yearB) {
        return yearA - yearB;
      }
      return monthA - monthB;
    }
  );

  return ordenatedUsers;
};
