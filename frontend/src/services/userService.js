import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

const getAuthHeaders = () => {
  const token = localStorage.getItem("sentinelcore_token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllUsers = async () => {
  const response = await axios.get(API_URL, getAuthHeaders());
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(
    `${API_URL}/${id}`,
    getAuthHeaders()
  );
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    user,
    getAuthHeaders()
  );
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(
    `${API_URL}/${id}`,
    getAuthHeaders()
  );
};