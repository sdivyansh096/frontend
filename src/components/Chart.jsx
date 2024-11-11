// import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import LineChart from "./LineChart";
// import "./styles.css";

// Chart.register(CategoryScale);

const Chart = () => {
  const [chartData, setChartData] = useState({ Data });

  return (
    <div>
      <LineChart chartData={chartData} />
    </div>
  );
};
export default Chart;
