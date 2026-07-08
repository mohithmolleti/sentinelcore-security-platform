import { Card, CardContent, Typography, Box } from "@mui/material";

function StatCard({ title, value, icon, color }) {
  return (
    <Card
      sx={{
        borderRadius: 5,
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all .35s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 0 25px ${color}55`,
          borderColor: color,
        },
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: 15,
                mb: 1,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="h3"
              fontWeight={700}
            >
              {value}
            </Typography>

          </Box>

          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: "20px",
              background: color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: 32,
            }}
          >
            {icon}
          </Box>

        </Box>

      </CardContent>
    </Card>
  );
}

export default StatCard;