import client from "../../services/axiosInstance";

const API_ENDPOINT = "/courses/enrolled-courses";

export default function getEnrolledCourses() {
  const token = localStorage.getItem("authToken");
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  return client(headers).get(API_ENDPOINT);
}
