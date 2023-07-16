import client from "../../services/axiosInstance";
const API_ENDPOINT = "/user/";

export default function UpdateProfile(payload) {
  const authToken = JSON.parse(localStorage.getItem("authToken") || "");

  return client({ Authorization: `Bearer ${authToken}` }).put(
    API_ENDPOINT,
    payload
  );
}