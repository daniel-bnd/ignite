export function dateFormatter(dateString?: string) {
  if (!dateString) return null;

  const date = new Date(dateString).getTime();
  const currentDate = new Date().getTime();
  const timeDifference = currentDate - date;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference < 1) return "Hoje";

  return `Há ${daysDifference} dia${daysDifference === 1 ? "" : "s"}`;
}
