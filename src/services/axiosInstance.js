import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "content-type": "application/json",
  },
});

export default client;
