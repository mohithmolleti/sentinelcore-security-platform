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
  Group,
  Warning,
  Assessment,
  Settings,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

import { useThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { mode, toggleTheme } = useThemeContext();
  const location = useLocation();

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
    {
      text: "Users",
      path: "/users",
      icon: <Group fontSize="small" />,
},
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 68,
          px: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <Box
          display="flex"
          alignItems="center"
          gap={5}
        >
          <Logo />

          <Box
            display="flex"
            alignItems="center"
            gap={1}
          >
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                variant={
                  location.pathname === item.path
                    ? "contained"
                    : "text"
                }
                color={
                  location.pathname === item.path
                    ? "primary"
                    : "inherit"
                }
                sx={{
                  borderRadius: 3,
                  px: 2.2,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Box>

        {/* RIGHT */}
        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <SearchBar />

          <Badge
  badgeContent={3}
  color="error"
>
  <IconButton
    sx={{
      bgcolor: "action.hover",
      width: 42,
      height: 42,
      "&:hover": {
        bgcolor: "action.selected",
      },
    }}
  >
    <Notifications />
  </IconButton>
</Badge>

          <IconButton onClick={toggleTheme}>
            {mode === "dark" ? (
              <LightMode />
            ) : (
              <DarkMode />
            )}
          </IconButton>

          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;