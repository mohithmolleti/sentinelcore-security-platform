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

export const getAllAssets = async () => {
  const response = await API.get("/assets", getAuthHeaders());
  return response.data.data;
};

export const createAsset = async (asset) => {
  const response = await API.post(
    "/assets",
    asset,
    getAuthHeaders()
  );
  return response.data.data;
};

export const updateAsset = async (id, asset) => {
  const response = await API.put(
    `/assets/${id}`,
    asset,
    getAuthHeaders()
  );
  return response.data.data;
};

export const deleteAsset = async (id) => {
  await API.delete(
    `/assets/${id}`,
    getAuthHeaders()
  );
};

export default API;