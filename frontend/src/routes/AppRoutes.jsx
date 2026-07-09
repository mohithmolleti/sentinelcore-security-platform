import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Assets from "../pages/Assets/Assets";
import Login from "../pages/Login/Login";

import ProtectedRoute from "../components/auth/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                  />

                  <Route
                    path="/dashboard"
                    element={<Dashboard />}
                  />

                  <Route
                    path="/assets"
                    element={<Assets />}
                  />

                  <Route
                    path="*"
                    element={
                      <h2 style={{ padding: 30 }}>
                        404 - Page Not Found
                      </h2>
                    }
                  />
                </Routes>
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;