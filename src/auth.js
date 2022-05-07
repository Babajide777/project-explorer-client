const getToken = () => {
  const tokenString = localStorage.getItem("user");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

const setToken = (user, data) => {
  localStorage.setItem(user, JSON.stringify(data));
};

const removeToken = () => {
  localStorage.removeItem("user");
};

//"http://localhost:4000/"
// "https://jide-explorer.herokuapp.com/"
const url = "https://jide-explorer.herokuapp.com/";

export { getToken, setToken, removeToken, url };
