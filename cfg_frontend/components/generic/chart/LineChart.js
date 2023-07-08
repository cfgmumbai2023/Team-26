import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function LineChart(props) {
  return <Line data={props?.data} options={props?.options} />;
}

export default LineChart;
