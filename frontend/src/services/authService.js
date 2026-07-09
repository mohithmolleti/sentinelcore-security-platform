const AUTH_KEY = "sentinelcore_logged_in";

export const login = (username, password) => {
  if (username === "admin" && password === "admin123") {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAuthenticated = () => {
  return localStorage.getItem(AUTH_KEY) === "true";
};