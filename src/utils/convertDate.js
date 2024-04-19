const convertDate = (dateString) => {
  if (!dateString) return "No date";
  const parts = dateString.split(".");
  const year = parts[2].length === 2 ? `20${parts[2]}` : parts[2];
  const date = new Date(`${year}-${parts[1]}-${parts[0]}`);

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  };
  const formatter = new Intl.DateTimeFormat("ru-RU", options);
  const formattedDate = formatter.format(date);
  return formattedDate;
};
export default convertDate;
