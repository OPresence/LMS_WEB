import client from "../../services/axiosInstance";

const API_ENDPOINT = "/courses/buy";

export default function buyCourse(payload) {
  const authToken = JSON.parse(localStorage.getItem("authToken") || "");
  return client({ Authorization: `Bearer ${authToken}` }).post(
    API_ENDPOINT,
    payload,
  );
}
