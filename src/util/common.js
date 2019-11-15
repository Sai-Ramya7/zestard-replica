export const dateFormate = (date) => {
  const months = ["January", "Febuary", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dd = new Date(date);
  return months[dd.getMonth()] + " " + dd.getDate() + ", " + dd.getFullYear();
}

export const serviceUrl = (url) => {
  const paramters = url.split('/');
  const len = paramters.length;
  return paramters[len - 2];
}

export const headerItemsUrl = (url) => {
  const paramters = url.split('/');
  const len = paramters.length;
  return (paramters[len - 3] + '/' + paramters[len - 2]);
}

export const postsUrl = (url) => {
  const paramters = url.split('/');
  const len = paramters.length;
  return (paramters[len - 4] + '/' + paramters[len - 3] + '/' + paramters[len - 2]);
}

export const changeUrl = (url) => {
  var newUrl = url.replace (/^[a-z]{5}:\/{2}[a-z]{1,}\.[a-z]{3}.(.*)/, '$1');
  const len = newUrl.length;
  const link = newUrl.split('/');
  for (var i=0 ; i< len ; i++) {
    link.splice(i, 1)
    break;
  }
  return (link[i] + '/' + link[i+1]);
}

export const removePre = (url) => {
  var newUrl = url.replace (/^[a-z]{5}:\/{2}[a-z]{1,}\.[a-z]{3}.(.*)/, '$1');
  const catUrl = newUrl.substr(newUrl.indexOf('/', 7) + 1)
  return catUrl;
}

// export const checkParent = (node) => {
//   if(node.parent_element !== null) {
//     if(node.parent_element.parent_element !== null) {
//       return this.params5(node.link);
//     } else {
//       return this.params4(node.link);
//     }
//   } else {
//     return this.postsUrl(node.link);
//   }
// }

export const removeSpecialSymbols = (title) => {
  title = title.replace(/[^a-zA-Z ]/g, "");
  return title;
}
