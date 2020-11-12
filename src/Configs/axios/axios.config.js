import axios from "axios";

export const setupAxios = () => {
  axios.defaults.timeout =
    parseInt(process.env.REACT_APP_TIMEOUT_AXIOS || "") || 60 * 1000;
  axios.defaults.baseURL = process.env.REACT_APP_URL || "";
};
