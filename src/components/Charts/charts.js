import React from "react";
import {
  BarChart,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Area,
  ResponsiveContainer,
} from "recharts";
import { revenuesData, surplusData, giftsData } from "./data";

export const Revenues = () => (
  <ResponsiveContainer width="100%" height={500}>
    <BarChart data={revenuesData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis />
      <Tooltip labelStyle={{ color: "#333", fontWeight: "600" }} />
      <Legend />
      <Bar dataKey="Expenses" fill="#333" />
      <Bar dataKey="Revenues" fill="#0a304e" />
    </BarChart>
  </ResponsiveContainer>
);

export const Surplus = () => (
  <ResponsiveContainer width="100%" height={500}>
    <AreaChart data={surplusData}>
      <defs>
        <Gradient />
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis />
      <Tooltip labelStyle={{ color: "#333", fontWeight: "600" }} />
      <Legend />
      <Area
        type="natural"
        dataKey="$ in millions"
        stroke="#3168a6"
        strokeWidth="4"
        fillOpacity={1}
        fill="url(#gradient)"
        dot={{ stroke: "white", strokeWidth: 2 }}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export const Gifts = () => (
  <ResponsiveContainer width="100%" height={500}>
    <AreaChart data={giftsData}>
      <defs>
        <Gradient />
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis />
      <Tooltip labelStyle={{ color: "#333", fontWeight: "600" }} />
      <Legend />
      <Area
        type="natural"
        dataKey="$ in millions"
        stroke="#3168a6"
        strokeWidth="4"
        fillOpacity={1}
        fill="url(#gradient)"
        dot={{ stroke: "white", strokeWidth: 2 }}
      />
    </AreaChart>
  </ResponsiveContainer>
);

const Gradient = () => (
  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#0a304e" stopOpacity={0.8} />
    <stop offset="95%" stopColor="#0a304e" stopOpacity={0} />
  </linearGradient>
);
