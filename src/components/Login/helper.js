import client from "../../services/axiosInstance";

const API_ENDPOINT = "auth/login";

export default function login(payload) {
  return client.post(API_ENDPOINT, payload);
}
