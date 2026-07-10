import { Box, Paper, Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function Alerts() {
  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: 4,
        textAlign: "center",
      }}
    >
      <WarningAmberIcon
        color="warning"
        sx={{ fontSize: 80, mb: 2 }}
      />

      <Typography variant="h4" fontWeight="bold">
        Alert Management
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 2 }}>
        This module will be available in Milestone 2.
      </Typography>
    </Paper>
  );
}

export default Alerts;