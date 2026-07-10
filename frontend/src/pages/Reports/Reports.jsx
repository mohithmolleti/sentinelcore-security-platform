import { Paper, Typography } from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";

function Reports() {
  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: 4,
        textAlign: "center",
      }}
    >
      <AssessmentIcon
        color="primary"
        sx={{ fontSize: 80, mb: 2 }}
      />

      <Typography variant="h4" fontWeight="bold">
        Reports
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 2 }}>
        PDF & Excel Reports will be added in Milestone 2.
      </Typography>
    </Paper>
  );
}

export default Reports;