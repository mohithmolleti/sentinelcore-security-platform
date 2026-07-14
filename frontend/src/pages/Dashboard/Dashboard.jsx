import { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";

import {
  Computer,
  Warning,
  Security,
  CheckCircle,
} from "@mui/icons-material";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/cards/StatCard";
import OverviewChart from "../../components/charts/OverviewChart";
import AssetDistributionChart from "../../components/dashboard/AssetDistributionChart";
import RecentAlerts from "../../components/cards/RecentAlerts";
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
    <Box
      sx={{
        px: 3,
        py: 3,
      }}
    >
      <WelcomeBanner />

      <Grid container spacing={3} mt={0.5}>
        {/* Stat Cards */}

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
            color="#43A047"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Warning Assets"
            value={stats.warningAssets}
            icon={<Warning />}
            color="#FB8C00"
          />
        </Grid>

        {/* Charts */}

        <Grid size={{ xs: 12, lg: 8 }}>
          <OverviewChart />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <RecentAlerts />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <AssetDistributionChart />
        </Grid>

        <Grid size={{ xs: 12, lg: 8 }}>
          <RecentAssets />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;