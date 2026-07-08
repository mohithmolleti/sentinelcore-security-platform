import { Paper, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Healthy", value: 18 },
  { name: "Running", value: 9 },
  { name: "Warning", value: 4 },
  { name: "Critical", value: 2 },
];

const COLORS = [
  "#00C853",
  "#2979FF",
  "#FFC107",
  "#FF5252",
];

function AssetDistributionChart() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 5,
        height: 420,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >
        Asset Distribution
      </Typography>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={75}
            outerRadius={115}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default AssetDistributionChart;