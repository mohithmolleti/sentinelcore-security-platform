import { Card, CardContent, Typography, Box } from "@mui/material";

function StatCard({ title, value, icon, color }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: 165,
        borderRadius: 5,
        overflow: "hidden",
        position: "relative",

        background:
          "linear-gradient(135deg,#161B22 0%,#21262D 100%)",

        border: "1px solid rgba(255,255,255,.08)",

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 20px 35px ${color}33`,
        },
      }}
    >
      <CardContent>

        <Box
          sx={{
            width: 65,
            height: 65,
            borderRadius: "50%",

            background: `${color}22`,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            color,

            mb: 2,

            "& svg": {
              fontSize: 34,
            },
          }}
        >
          {icon}
        </Box>

        <Typography
          color="text.secondary"
          fontWeight={600}
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          mt={1}
        >
          {value}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default StatCard;