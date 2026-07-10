import { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

function UserMenu() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap={1.5}
        sx={{
          cursor: "pointer",
          borderRadius: 3,
          p: 1,
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
        onClick={handleOpen}
      >
        <Avatar
          sx={{
            bgcolor: "primary.main",
            width: 46,
            height: 46,
          }}
        >
          M
        </Avatar>

        <Box>
          <Typography fontWeight="bold">
            Mohith
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Administrator
          </Typography>
        </Box>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 220,
            borderRadius: 3,
            mt: 1,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>

          Profile
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/settings");
          }}
        >
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>

          Settings
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => {
            handleClose();
            handleLogout();
          }}
        >
          <ListItemIcon>
            <LogoutIcon
              color="error"
              fontSize="small"
            />
          </ListItemIcon>

          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;