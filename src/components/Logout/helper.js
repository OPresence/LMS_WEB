import client from "../../services/axiosInstance";

const API_ENDPOINT = "auth/logout";

export default function logout() {
  return client().get(API_ENDPOINT);
}
