import { Paper, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function Settings() {
  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: 4,
        textAlign: "center",
      }}
    >
      <SettingsIcon
        color="action"
        sx={{ fontSize: 80, mb: 2 }}
      />

      <Typography variant="h4" fontWeight="bold">
        Settings
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 2 }}>
        User preferences and application settings will be added in Milestone 2.
      </Typography>
    </Paper>
  );
}

export default Settings;