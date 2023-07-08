import CardWithHeader from "../generic/CardWithHeader";
import BarChart from "../generic/chart/BarChart";
import DoughnutChart from "../generic/chart/DoughnutChart";

const nums = [1, 2, 3, 4, 5];

function Charts(props) {
  return (
    <div className="py-6 space-y-6 w-full">
      <CardWithHeader
        cardClassName="h-[400px] p-8"
        header={
          <h2 className="text-purple-600 font-medium text-lg">Top 10 Skills</h2>
        }
      >
        <BarChart
          data={{
            labels: nums,
            datasets: [
              {
                data: nums,
                backgroundColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: { suggestedMin: 0 },
            },
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                display: true,
                anchor: "end",
                align: "top",
                offset: -35,
                color: "#FFFFFF",
                font: {
                  weight: "medium",
                  size: 16,
                },

                // formatter: function (value, context) {
                //   return `${Math.round(
                //     (value / props?.totalEmployeeCount) * 100
                //   )} %`;
                // },
              },
            },
          }}
        />
      </CardWithHeader>
      <div className="flex w-full space-x-4">
        <CardWithHeader
          className="w-[40%]"
          cardClassName="h-[400px] p-8"
          header={
            <h2 className="text-purple-600 font-medium text-lg">Gender Ratio</h2>
          }
        >
          <DoughnutChart
            data={{
              labels: nums,
              datasets: [
                {
                  data: nums,
                  backgroundColor: ["#FC607C", "#14C9C9"],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                },
                datalabels: {
                  display: true,

                  color: "#FFFFFF",
                  font: {
                    weight: "medium",
                    size: 16,
                  },

                  // formatter: function (value, context) {
                  //   return `${Math.round(
                  //     (value / props?.totalEmployeeCount) * 100
                  //   )} %`;
                  // },
                },
              },
            }}
          />
        </CardWithHeader>
        <CardWithHeader
          className="flex-grow"
          cardClassName="h-[400px] p-8"
          header={
            <h2 className="text-purple-600 font-medium text-lg">Resume Scores</h2>
          }
        >
          <BarChart
            data={{
              labels: nums,
              datasets: [
                {
                  data: nums,
                  backgroundColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: { suggestedMin: 0 },
              },
              plugins: {
                legend: {
                  display: false,
                },
                datalabels: {
                  display: true,
                  anchor: "end",
                  align: "top",
                  offset: -35,
                  color: "#FFFFFF",
                  font: {
                    weight: "medium",
                    size: 16,
                  },

                  // formatter: function (value, context) {
                  //   return `${Math.round(
                  //     (value / props?.totalEmployeeCount) * 100
                  //   )} %`;
                  // },
                },
              },
            }}
          />
        </CardWithHeader>
      </div>
    </div>
  );
}

export default Charts;
