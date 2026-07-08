import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getDashboardStats = async () => {
  const response = await API.get("/dashboard/stats");
  return response.data.data;
};

export default API;