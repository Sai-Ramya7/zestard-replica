
export const dateFormate = (date) => {
  const months = ["January", "Febuary", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dd = new Date(date);
  return months[dd.getMonth()] + " " + dd.getDate() + ", " + dd.getFullYear();
}