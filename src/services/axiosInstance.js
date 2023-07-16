import axios from "axios";

const client = (apiHeaders = {}) => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...apiHeaders,
    },
  });
};

// axios.defaults.withCredentials = true;

export default client;
