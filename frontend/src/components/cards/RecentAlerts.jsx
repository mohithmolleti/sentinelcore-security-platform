import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";

const alerts = [
  {
    title: "SQL Injection Attempt",
    severity: "Critical",
  },
  {
    title: "Malware Detected",
    severity: "High",
  },
  {
    title: "Multiple Failed Logins",
    severity: "Medium",
  },
  {
    title: "System Update Available",
    severity: "Low",
  },
];

function RecentAlerts() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
      <Typography variant="h6" mb={2}>
        Recent Alerts
      </Typography>

      <List>
        {alerts.map((alert, index) => (
          <ListItem
            key={index}
            divider={index !== alerts.length - 1}
            secondaryAction={
              <Chip
                label={alert.severity}
                color={
                  alert.severity === "Critical"
                    ? "error"
                    : alert.severity === "High"
                    ? "warning"
                    : alert.severity === "Medium"
                    ? "primary"
                    : "success"
                }
              />
            }
          >
            <ListItemText primary={alert.title} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default RecentAlerts;