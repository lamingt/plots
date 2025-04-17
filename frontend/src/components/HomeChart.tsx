import usePromise from "react-promise-suspense";
import { getWhoAsked } from "../api";
import { PlotData } from "../Types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function HomeChart() {
  const plotData: PlotData = usePromise(getWhoAsked, [], 0.01);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Those who asked", "Those who didn't"],
    datasets: [
      {
        label: "# of People",
        data: [plotData.xData[0], plotData.yData[0]],
        backgroundColor: ["rgba(255, 99, 132, 0.9)", "rgba(54, 162, 235, 0.9)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
      tooltip: {
        bodyColor: "white",
        titleColor: "white",
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default HomeChart;
