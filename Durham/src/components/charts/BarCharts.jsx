import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// eslint-disable-next-line react/prop-types
export default function BarCharts({ chartdata = data }) {
  return (
    <ResponsiveContainer height={300}>
      <BarChart width={730} height={250} data={chartdata}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Provider_A" fill="#A41752" />
        <Bar dataKey="Provider_B" fill="#DB2777" />
        <Bar dataKey="Provider_C" fill="#EC4899" />
      </BarChart>
    </ResponsiveContainer>
  );
}
const data = [
  {
    name: "Week 1",
    Provider_A: 4000,
    Provider_B: 2400,
    Provider_C: 2400,
  },
  {
    name: "Week 2",
    Provider_A: 2000,
    Provider_B: 9800,
    Provider_C: 2290,
  },
  {
    name: "Week 3",
    Provider_A: 2780,
    Provider_B: 3908,
    Provider_C: 2000,
  },
  {
    name: "Week 4",
    Provider_A: 1890,
    Provider_B: 4800,
    Provider_C: 2181,
  },
];
