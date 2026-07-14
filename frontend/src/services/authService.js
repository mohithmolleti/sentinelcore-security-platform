import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const TOKEN_KEY = "sentinelcore_token";
const USER_KEY = "sentinelcore_user";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });

    const data = response.data;

    localStorage.setItem(TOKEN_KEY, data.token);

    localStorage.setItem(
      USER_KEY,
      JSON.stringify({
        username: data.username,
        fullName: data.fullName,
        role: data.role,
      })
    );

    return {
      success: true,
      user: data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Invalid username or password",
    };
  }
};

export const register = async (user) => {
  const response = await axios.post(`${API_URL}/register`, user);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};