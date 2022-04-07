import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../utils/types";

export const loginUser = (dataToSubmit) => {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => {
      return response.data;
    });

  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const registerUser = (dataToSubmit) => {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => {
      return response.data;
    });

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const auth = () => {
  const request = axios.get("/api/users/auth").then((response) => {
    return response.data;
  });

  return {
    type: AUTH_USER,
    payload: request,
  };
};
