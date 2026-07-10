import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Divider,
} from "@mui/material";

import {
  WarningAmber,
  Security,
  BugReport,
  SystemUpdate,
} from "@mui/icons-material";

const alerts = [
  {
    title: "SQL Injection Attempt",
    severity: "Critical",
    icon: <BugReport />,
  },
  {
    title: "Malware Detected",
    severity: "High",
    icon: <Security />,
  },
  {
    title: "Multiple Failed Logins",
    severity: "Medium",
    icon: <WarningAmber />,
  },
  {
    title: "System Update Available",
    severity: "Low",
    icon: <SystemUpdate />,
  },
];

const getChipColor = (severity) => {
  switch (severity) {
    case "Critical":
      return "error";
    case "High":
      return "warning";
    case "Medium":
      return "primary";
    default:
      return "success";
  }
};

function RecentAlerts() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        Recent Alerts
      </Typography>

      <List disablePadding>
        {alerts.map((alert, index) => (
          <div key={index}>
            <ListItem
              secondaryAction={
                <Chip
                  label={alert.severity}
                  color={getChipColor(alert.severity)}
                  size="small"
                  sx={{
                    minWidth: 85,
                    fontWeight: "bold",
                  }}
                />
              }
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: `${getChipColor(alert.severity)}.main`,
                  }}
                >
                  {alert.icon}
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={alert.title}
                secondary="Just now"
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
              />
            </ListItem>

            {index !== alerts.length - 1 && (
              <Divider />
            )}
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default RecentAlerts;