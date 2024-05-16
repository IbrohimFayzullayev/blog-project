import axios from "axios";

const axiosCredentials = {
  baseURL: "https://api.ibrohim.site/api",
  headers: {
    Accept: "application/json",
  },
};

export const Axios = axios.create(axiosCredentials);
export const authAxios = axios.create(axiosCredentials);
