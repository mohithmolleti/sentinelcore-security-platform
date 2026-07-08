import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", assets: 210 },
  { day: "Tue", assets: 218 },
  { day: "Wed", assets: 225 },
  { day: "Thu", assets: 232 },
  { day: "Fri", assets: 236 },
  { day: "Sat", assets: 242 },
  { day: "Sun", assets: 248 },
];

function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="day" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="assets"
          stroke="#00C853"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default OverviewChart;