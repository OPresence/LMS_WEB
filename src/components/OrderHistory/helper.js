import client from "../../services/axiosInstance";

const API_ENDPOINT = "/courses/enrolled-courses";

export default function getEnrolledCourses() {
  const authToken = JSON.parse(localStorage.getItem("authToken") || "");
  return client({ Authorization: `Bearer ${authToken}` }).get(API_ENDPOINT);
}
