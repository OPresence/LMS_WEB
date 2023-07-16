import client from "../../services/axiosInstance";

const API_ENDPOINT = "/courses/get-all-courses";

export default function getAllCourses() {
  return client().get(API_ENDPOINT);
}
