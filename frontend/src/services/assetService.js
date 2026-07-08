import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getAllAssets = async () => {
  const response = await API.get("/assets");
  return response.data.data;
};

export const createAsset = async (asset) => {
  const response = await API.post("/assets", asset);
  return response.data.data;
};

export const updateAsset = async (id, asset) => {
  const response = await API.put(`/assets/${id}`, asset);
  return response.data.data;
};

export const deleteAsset = async (id) => {
  await API.delete(`/assets/${id}`);
};

export default API;