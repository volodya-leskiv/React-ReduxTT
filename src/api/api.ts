export const requestURL = 'https://api.exchangerate.host/convert?from=UAH&to=USD';
// const request = new XMLHttpRequest();
//
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
//
// request.onload = function () {
//   const { response } = request;
//
//   return response;
export const getTodos = async () => {
  const request = await fetch(requestURL);

  return request.json();
};
