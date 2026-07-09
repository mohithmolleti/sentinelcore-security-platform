import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

import { useThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { mode, toggleTheme } = useThemeContext();

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
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Logo />

        <SearchBar />

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <IconButton>
            <Badge
              color="error"
              badgeContent={3}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton onClick={toggleTheme}>
            {mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>

          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;