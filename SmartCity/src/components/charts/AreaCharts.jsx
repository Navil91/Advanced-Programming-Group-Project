import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AreaCharts() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#DB2777" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#DB2777" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="A"
          stroke="#a855f7"
          fillOpacity={1}
          fill="url(#colorA)"
        />
        <Area
          type="monotone"
          dataKey="B"
          stroke="#DB2777"
          fillOpacity={1}
          fill="url(#colorB)"
        />
        <Area
          type="monotone"
          dataKey="C"
          stroke="#facc15"
          fillOpacity={1}
          fill="url(#colorC)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
const data = [
  {
    name: "Nov 2024",
    A: 17347,
    B: 17634,
    C: 17625,
  },
  {
    name: "Dec 2024",
    A: 17364,
    B: 17596,
    C: 17551,
  },
  {
    name: "Jan 2025",
    A: 13615,
    B: 13746,
    C: 13786,
  },
];
