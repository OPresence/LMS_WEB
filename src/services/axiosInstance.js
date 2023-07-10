import axios from "axios";

const client = (apiHeaders = {}) => {
  return axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...apiHeaders,
    },
  });
};

export default client;
