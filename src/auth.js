const getToken = () => {
  const tokenString = localStorage.getItem("user");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

const setToken = (user, data) => {
  localStorage.setItem(user, JSON.stringify(data));
};

export { getToken, setToken };
