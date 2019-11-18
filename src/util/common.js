// Formatting date

export const dateFormate = (date) => {
  const months = ["January", "Febuary", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dd = new Date(date);
  return months[dd.getMonth()] + " " + dd.getDate() + ", " + dd.getFullYear();
}

// Removing the host from the url

export const removePre = (url) => {
  var newUrl = url.replace (/^[a-z]{5}:\/{2}[a-z]{1,}\.[a-z]{3}.(.*)/, '$1');
  const catUrl = newUrl.substr(newUrl.indexOf('/', 7) + 1)
  return catUrl;
}

// To remove special characters from title

export const removeSpecialSymbols = (title) => {
  title = title.replace(/[^a-zA-Z ]/g, "");
  return title;
}
