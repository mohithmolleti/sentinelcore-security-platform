import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

import { getDashboardStats } from "../../services/dashboardService";

function OverviewChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadChart();
  }, []);

  const loadChart = async () => {
    try {
      const stats = await getDashboardStats();

      setChartData([
        {
          category: "Running",
          count: stats.runningAssets,
        },
        {
          category: "Healthy",
          count: stats.healthyAssets,
        },
        {
          category: "Warning",
          count: stats.warningAssets,
        },
        {
          category: "Critical",
          count: stats.criticalAssets,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 5, height: 420 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Asset Status Overview
      </Typography>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#1976D2" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default OverviewChart;