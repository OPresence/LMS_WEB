import axios from "axios";

const client = (apiHeaders = {}) => {
  return axios.create({
    baseURL: "http://localhost:8000/api/",
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
