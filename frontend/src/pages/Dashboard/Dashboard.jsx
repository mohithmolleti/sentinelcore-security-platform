import { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import {
  Computer,
  Warning,
  Security,
  CheckCircle,
} from "@mui/icons-material";

import StatCard from "../../components/cards/StatCard";
import OverviewChart from "../../components/charts/OverviewChart";
import RecentAlerts from "../../components/cards/RecentAlerts";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import AssetDistributionChart from "../../components/dashboard/AssetDistributionChart";
import RecentAssets from "../../components/dashboard/RecentAssets";

import { getDashboardStats } from "../../services/dashboardService";

function Dashboard() {
  const [stats, setStats] = useState({
    totalAssets: 0,
    healthyAssets: 0,
    runningAssets: 0,
    warningAssets: 0,
    criticalAssets: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 5 }}>
      <WelcomeBanner />

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Total Assets"
            value={stats.totalAssets}
            icon={<Computer />}
            color="#1976D2"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Running Assets"
            value={stats.runningAssets}
            icon={<Security />}
            color="#00C853"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Healthy Assets"
            value={stats.healthyAssets}
            icon={<CheckCircle />}
            color="#2E7D32"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Warning Assets"
            value={stats.warningAssets}
            icon={<Warning />}
            color="#FFC107"
          />
        </Grid>

        <Grid size={{ xs: 12, lg: 8 }}>
          <OverviewChart />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <AssetDistributionChart />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Box sx={{ mb: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              Recent Alerts
            </Typography>
          </Box>

          <RecentAlerts />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Box sx={{ mb: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              Recent Assets
            </Typography>
          </Box>

          <RecentAssets />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;