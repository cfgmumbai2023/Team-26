import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables);
Chart.register(ChartDataLabels);

function BarChart(props) {
  return (
    <Bar
      data={props?.data}
      options={props?.options}
      plugins={[ChartDataLabels]}
    />
  );
}

export default BarChart;
