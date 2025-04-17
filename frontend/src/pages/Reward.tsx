import usePromise from "react-promise-suspense";
import { getReward } from "../api";
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

function Reward() {
  const plotData = usePromise(getReward, [], 0.01);
  const data = {
    labels: plotData.xData,
    datasets: [
      {
        label: "Reward",
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
          text: "Reward over episodes",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "episodes",
        },
      },
      y: {
        title: {
          display: true,
          text: "Reward",
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

export default Reward;
