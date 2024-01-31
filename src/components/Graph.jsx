import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, Bar, Line } from "react-chartjs-2";
const Graph = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["A", "B", "C", "d", "f"],
          datasets: [
            {
              label: "exam one",
              data: ["10", "200", "150", "250", "650", "180"],
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
