import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
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
    name: "Week 1",
    A: 4000,
    B: 2400,
    C: 3500,
  },
  {
    name: "Week 2",
    A: 3000,
    B: 1398,
    C: 2210,
  },
  {
    name: "Week 3",
    A: 2000,
    B: 9800,
    C: 2290,
  },
  {
    name: "Week 4",
    A: 2780,
    B: 3908,
    C: 4000,
  },
];
