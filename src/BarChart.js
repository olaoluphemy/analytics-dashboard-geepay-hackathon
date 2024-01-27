import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = [
  { month: "Jan", count: 5500, id: 1 },
  { month: "feb", count: 15000, id: 2 },
  { month: "mar", count: 2600, id: 3 },
  { month: "apr", count: 28000, id: 4 },
  { month: "may", count: 9000, id: 5 },
  { month: "jun", count: 45000, id: 6 },
  { month: "jul", count: 8900, id: 7 },
  { month: "Aug", count: 22000, id: 7 },
  { month: "Sep", count: 32000, id: 7 },
  { month: "Oct", count: 4700, id: 7 },
  { month: "Nov", count: 35000, id: 7 },
  { month: "Dec", count: 30000, id: 7 },
];

export default function BarChart() {
  return (
    <Bar
      data={{
        labels: data.map((data) => data.month),
        datasets: [
          {
            label: "",
            data: data.map((data) => data.count),
            backgroundColor: [
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
              "rgba(52, 202, 165, 0.5)",
            ],
            borderRadius: 500,
          },
        ],
      }}
    />
  );
}
