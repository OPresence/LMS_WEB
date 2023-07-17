import client from "../../services/axiosInstance";

const API_ENDPOINT = "/courses/get-all-courses";
const API_ENDPOINT_ID = "/courses";

export default function getAllCourses() {
  return client().get(API_ENDPOINT);
}

export function getCoursesById(id) {
  return client().get(`${API_ENDPOINT_ID}/${id}`);
}
