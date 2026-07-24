import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

const getAuthHeaders = () => {
  const token = localStorage.getItem("sentinelcore_token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getDashboardStats = async () => {
  const response = await API.get(
    "/dashboard/stats",
    getAuthHeaders()
  );

  return response.data.data;
};

export default API;