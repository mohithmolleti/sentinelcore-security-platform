import { Avatar, Box, Typography } from "@mui/material";

function UserMenu() {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1.5}
    >
      <Avatar sx={{ bgcolor: "#1976D2" }}>
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
  );
}

export default UserMenu;