"use client"

import { Bar, BarChart, Tooltip, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * (24 - 18 + 1)) + 18,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
          domain={['auto', 'auto']}
        />
        <Line dataKey="total" stroke="#FF8000" type='monotone' />
        <Tooltip formatter={(value, name) => [`${value}%`, name]}/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      </LineChart>
    </ResponsiveContainer>
  )
}