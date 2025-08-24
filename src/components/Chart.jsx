import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", pv: 30000 },
  { name: "Feb", pv: 10000 },
  { name: "Mar", pv: 30000 },
  { name: "Apr", pv: 25000 },
  { name: "May", pv: 39000 },
  { name: "Jun", pv: 26000 },
  { name: "Jul", pv: 37000 },
  { name: "Aug", pv: 24000 }
];


export const Chart = () => {
  return (
    <ResponsiveContainer>
      <LineChart data={data} margin={{ right: 20, left: 20 }}>
        <CartesianGrid vertical={false} strokeDasharray="0" stroke="#ddd" />
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="linear" dataKey="pv" stroke="#2E28CD" strokeWidth={1} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}