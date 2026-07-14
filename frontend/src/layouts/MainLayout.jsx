import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          width: "100%",
          px: 2,
          py: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;