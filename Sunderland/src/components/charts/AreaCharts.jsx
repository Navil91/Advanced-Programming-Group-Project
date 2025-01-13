import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// eslint-disable-next-line react/prop-types
export default function AreaCharts({ chartdata = data }) {
  return (
    <ResponsiveContainer width="100%" height={120}>
      <AreaChart
        data={chartdata}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#db2777" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#db2777" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#db2777"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
const data = [
  {
    name: "Page A",
    uv: 4,
  },
  {
    name: "Page B",
    uv: 3,
  },
  {
    name: "Page C",
    uv: 2,
  },
  {
    name: "Page D",
    uv: 2,
  },
  {
    name: "Page E",
    uv: 1,
  },
  {
    name: "Page F",
    uv: 2,
  },
  {
    name: "Page G",
    uv: 3,
  },
];
