import { Paper, Typography, Box } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";

function WelcomeBanner() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <Paper
      sx={{
        p: 4,
        mb: 4,
        borderRadius: 5,
        background:
          "linear-gradient(135deg,#00C853 0%, #1976D2 100%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          {greeting}, Mohith{" "}
          <WavingHandIcon
            sx={{
              verticalAlign: "middle",
              color: "#FFD54F",
            }}
          />
        </Typography>

        <Typography variant="h6">
          Welcome back to SentinelCore Security Platform
        </Typography>

        <Typography sx={{ mt: 1, opacity: .9 }}>
          Monitor your infrastructure, assets and security posture
          in one unified dashboard.
        </Typography>
      </Box>
    </Paper>
  );
}

export default WelcomeBanner;