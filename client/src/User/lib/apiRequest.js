import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true,
});

export default apiRequest;