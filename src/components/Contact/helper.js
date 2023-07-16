import client from "../../services/axiosInstance";

const API_ENDPOINT = "/contact";

export default function contact(payload) {
  return client().post(API_ENDPOINT, payload);
}
