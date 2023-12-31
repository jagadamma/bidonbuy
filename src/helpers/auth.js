import { setCookie, getCookie, deleteCookie } from "./cookies";
import { setLocalStorage, getLocalStorage, deleteLocalStorage } from "./localStorage";

export const setAuthentication = (token, user) => {
  setCookie('token', token);
  console.log(token);
  setLocalStorage('user', user);
};

export const isAuthenticated = () => {
  console.log(getCookie('token'))
  if (getCookie('token') && getLocalStorage('user')) {
    return getLocalStorage('user');
  } else {
    return false;
  }
}

export const logout = (next) => {

  deleteCookie('token');
  deleteLocalStorage('user');
  next();
}
