import { useEffect, useState } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import {
  Computer,
  Warning,
  Security,
  CheckCircle,
} from "@mui/icons-material";

import StatCard from "../../components/cards/StatCard";
import OverviewChart from "../../components/charts/OverviewChart";
import RecentAlerts from "../../components/cards/RecentAlerts";
import { getAllAssets } from "../../services/assetService";

function Dashboard() {
  const [assetCount, setAssetCount] = useState(0);

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    try {
      const response = await getAllAssets();
      setAssetCount(response.length);
    } catch (error) {
      console.error("Failed to load assets:", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Security Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title="Total Assets"
            value={assetCount}
            icon={<Computer />}
            color="#1976d2"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title="Critical Alerts"
            value="12"
            icon={<Warning />}
            color="#d32f2f"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title="Protected Assets"
            value="231"
            icon={<Security />}
            color="#7b1fa2"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title="Healthy Assets"
            value="236"
            icon={<CheckCircle />}
            color="#2e7d32"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>
              Infrastructure Growth
            </Typography>

            <OverviewChart />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <RecentAlerts />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
            <Typography variant="h6" mb={2}>
              Asset Health
            </Typography>

            <Typography color="success.main">
              🟢 Healthy : 236
            </Typography>

            <Typography color="warning.main" mt={1}>
              🟡 Warning : 8
            </Typography>

            <Typography color="error.main" mt={1}>
              🔴 Critical : 4
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;