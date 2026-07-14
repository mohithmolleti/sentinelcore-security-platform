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
  Box,
} from "@mui/material";

import {
  BugReport,
  WarningAmber,
  Security,
  SystemUpdate,
} from "@mui/icons-material";

const alerts = [
  {
    title: "SQL Injection Attempt",
    severity: "Critical",
    time: "2 min ago",
    icon: <BugReport />,
  },
  {
    title: "Malware Detected",
    severity: "High",
    time: "8 min ago",
    icon: <Security />,
  },
  {
    title: "Multiple Failed Logins",
    severity: "Medium",
    time: "18 min ago",
    icon: <WarningAmber />,
  },
  {
    title: "System Update Available",
    severity: "Low",
    time: "1 hour ago",
    icon: <SystemUpdate />,
  },
];

const getColor = (severity) => {
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
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
      >
        Recent Security Alerts
      </Typography>

      <List disablePadding>
        {alerts.map((alert, index) => (
          <Box key={index}>
            <ListItem
              sx={{ py: 1.5 }}
              secondaryAction={
                <Chip
                  label={alert.severity}
                  color={getColor(alert.severity)}
                  size="small"
                />
              }
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: `${getColor(alert.severity)}.main`,
                  }}
                >
                  {alert.icon}
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography fontWeight={600}>
                    {alert.title}
                  </Typography>
                }
                secondary={alert.time}
              />
            </ListItem>

            {index !== alerts.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Paper>
  );
}

export default RecentAlerts;