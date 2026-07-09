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
        sx={{
          px: { xs: 2, md: 4 },
          py: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;