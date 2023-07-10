import client from "../../services/axiosInstance";

const API_ENDPOINT = "auth/register";

export default function register(payload) {
  return client().post(API_ENDPOINT, payload);
}
