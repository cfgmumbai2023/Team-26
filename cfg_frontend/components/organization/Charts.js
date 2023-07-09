import visualize from "../../data/organization/visualize.json";
import LineChart from "../generic/chart/LineChart";
import CardWithHeader from "../generic/CardWithHeader";

const levels = [1, 2, 3];

console.log();

function Charts() {
  return (
    <div>
      <CardWithHeader
        cardClassName="h-[400px] p-8"
        header={
          <div className="flex items-center justify-between">
            <h2 className="text-purple-600 font-medium text-lg">
              School vs School performance
            </h2>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <h2 className="text-purple-600 font-medium text-lg">Level:</h2>
                <select className="text-sm px-3 py-1 mt-1 mb-2 bg-purple-100 text-purple-600 border-[1px] border-purple-600 rounded-md">
                  {levels?.map((level) => {
                    return (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <h2 className="text-purple-600 font-medium text-lg">
                  College1:
                </h2>

                <select className="text-sm px-3 py-1 mt-1 mb-2 bg-purple-100 text-purple-600 border-[1px] border-purple-600 rounded-md">
                  {Object.keys(visualize[Object.keys(visualize)[0]])?.map(
                    (key) => {
                      return (
                        <option key={key} value={key}>
                          {key}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <h2 className="text-purple-600 font-medium text-lg">
                  College2:
                </h2>

                <select className="text-sm px-3 py-1 mt-1 mb-2 bg-purple-100 text-purple-600 border-[1px] border-purple-600 rounded-md">
                  {Object.keys(visualize[Object.keys(visualize)[0]])?.map(
                    (key) => {
                      return (
                        <option key={key} value={key}>
                          {key}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
            </div>
          </div>
        }
      >
        <LineChart
          data={{
            labels: Object.keys(
              Object.values(visualize[Object.keys(visualize)[0]])[0]
            ),
            datasets: [
              {
                data: Object.values(
                  Object.values(visualize[Object.keys(visualize)[0]])[0]
                ),
                backgroundColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
                borderColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
              },
              {
                data: Object.values(
                  Object.values(visualize[Object.keys(visualize)[0]])[1]
                ),
                backgroundColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
                borderColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
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
  );
}

export default Charts;
