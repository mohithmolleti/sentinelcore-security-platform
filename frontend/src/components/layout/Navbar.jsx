import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Button,
} from "@mui/material";

import {
  Notifications,
  DarkMode,
  LightMode,
  Dashboard,
  Storage,
  Warning,
  Assessment,
  Settings,
} from "@mui/icons-material";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

import { useThemeContext } from "../../context/ThemeContext";
import { logout } from "../../services/authService";

function Navbar() {
  const { mode, toggleTheme } = useThemeContext();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      text: "Dashboard",
      path: "/dashboard",
      icon: <Dashboard fontSize="small" />,
    },
    {
      text: "Assets",
      path: "/assets",
      icon: <Storage fontSize="small" />,
    },
    {
      text: "Alerts",
      path: "/alerts",
      icon: <Warning fontSize="small" />,
    },
    {
      text: "Reports",
      path: "/reports",
      icon: <Assessment fontSize="small" />,
    },
    {
      text: "Settings",
      path: "/settings",
      icon: <Settings fontSize="small" />,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={4}>
          <Logo />

          <Box display="flex" gap={1}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                color={
                  location.pathname === item.path
                    ? "primary"
                    : "inherit"
                }
                variant={
                  location.pathname === item.path
                    ? "contained"
                    : "text"
                }
                sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <SearchBar />

          <Badge
  badgeContent={3}
  color="error"
  overlap="circular"
>
  <IconButton
    sx={{
      bgcolor: "action.hover",
      "&:hover": {
        bgcolor: "action.selected",
      },
    }}
  >
    <Notifications />
  </IconButton>
</Badge>

          <IconButton onClick={toggleTheme}>
            {mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>

          <UserMenu />

          <Button
            variant="outlined"
            color="error"
            onClick={handleLogout}
            sx={{ textTransform: "none" }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;