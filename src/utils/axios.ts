import axios from "axios";

const axiosCredentials = {
  baseURL: "http://localhost:8080/api",
  headers: {
    Accept: "application/json",
  },
};

export const Axios = axios.create(axiosCredentials);
export const authAxios = axios.create(axiosCredentials);
