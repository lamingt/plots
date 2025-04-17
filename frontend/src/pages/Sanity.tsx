import usePromise from "react-promise-suspense";
import { getSanity } from "../api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";

function Sanity() {
  const plotData = usePromise(getSanity, [], 0.01);
  const data = {
    labels: plotData.xData,
    datasets: [
      {
        label: "Sanity",
        data: plotData.yData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        title: {
          display: true,
          text: "Sanity over time spent coding this",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (hours)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sanity Level",
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="fixed top-[50%] left-[50%] translate-[-50%] min-h-[50vh] min-w-[50vw] bg-white p-10">
      <Line data={data} options={options} />
    </div>
  );
}

export default Sanity;
