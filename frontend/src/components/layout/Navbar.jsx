import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import {
  LightMode,
  DarkMode,
  NotificationsNone,
  Dashboard,
  Dns,
  Security,
  Assessment,
  Settings,
} from "@mui/icons-material";

import { useThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { mode, toggleTheme } = useThemeContext();

  const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: <Dashboard fontSize="small" /> },
  { name: "Assets", path: "/assets", icon: <Dns fontSize="small" /> },
  { name: "Alerts", path: "/alerts", icon: <Security fontSize="small" /> },
  { name: "Reports", path: "/reports", icon: <Assessment fontSize="small" /> },
  { name: "Settings", path: "/settings", icon: <Settings fontSize="small" /> },
];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(13,17,23,0.75)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: "#00C853",
            mr: 5,
          }}
        >
          SentinelCore
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexGrow: 1 }}>
          {navItems.map((item) => (
           <Button
  key={item.name}
  component={NavLink}
  to={item.path}
  color="inherit"
  startIcon={item.icon}
  sx={{
    borderRadius: 3,
    px: 2,
    textTransform: "none",
    "&.active": {
      bgcolor: "primary.main",
      color: "#fff",
    },
    "&:hover": {
      bgcolor: "rgba(255,255,255,0.08)",
    },
  }}
>
  {item.name}
</Button>
          ))}
        </Box>

        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>

        <IconButton color="inherit">
          <NotificationsNone />
        </IconButton>

        <Avatar
          sx={{
            ml: 2,
            bgcolor: "#00C853",
            fontWeight: 700,
          }}
        >
          M
        </Avatar>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;