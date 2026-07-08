import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Assets from "../pages/Assets/Assets";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/assets" element={<Assets />} />

          <Route
            path="*"
            element={<h2 style={{ padding: "30px" }}>404 - Page Not Found</h2>}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;