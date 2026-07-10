import { Card, CardContent, Typography, Box } from "@mui/material";

function StatCard({ title, value, icon, color }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: 210,
        borderRadius: 5,
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(135deg,#161B22 0%,#21262D 100%)",
        border: "1px solid rgba(255,255,255,.08)",
        transition: ".35s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: `0 18px 30px ${color}33`,
        },
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: `${color}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color,
            "& svg": {
              fontSize: 36,
            },
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="body1"
          color="text.secondary"
          fontWeight={600}
        >
          {title}
        </Typography>

        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            lineHeight: 1,
            mt: 1,
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;