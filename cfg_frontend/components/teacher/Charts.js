import { Line } from "react-chartjs-2";
import CardWithHeader from "../generic/CardWithHeader";
import BarChart from "../generic/chart/BarChart";
import DoughnutChart from "../generic/chart/DoughnutChart";
import LineChart from "../generic/chart/LineChart";
import performance from "../../data/performance.json";
import Disability from "../../data/disability.json";
import Groups from "../../data/group.json";

//performance analysis
const nums = [1, 2, 3];
const quarter = ["Quarter 1", "Quarter 2", "Quarter 3"];
const Year_data = Object.keys(performance).map((level) => {
  console.log(level);
  const scores = Object.values(performance[level]);
  //console.log(scores);
  return scores;
});
console.log(Year_data);

//disabiltiy charts
const disabilityTypes = Disability.disability.map(
  (item) => item.disability_type
);
const disabilityCount = Disability.disability.map(
  (item) => item.disability_count
);
console.log(disabilityTypes);

//studentCount
const StudentCount = Groups.groups.map((item) => item.student_count);
const GroupNumber = Groups.groups.map((item) => item.group_number);

function Charts(props) {
  return (
    <div className="py-6 space-y-6 w-full">
      <CardWithHeader
        cardClassName="h-[400px] p-8"
        header={
          <div className="items-center justify-end">
            <h2 className="text-purple-600 font-medium text-lg">
              Performance Analysis
            </h2>
            <div>
              <div>
                <h2>Year: </h2>
                <select>
                  <option>Year 1</option>
                  <option>Year 2</option>
                  <option>Year 3</option>
                </select>
              </div>
              <div>
                <h2>Level: </h2>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>
        }
      >
        <LineChart
          data={{
            labels: quarter,
            datasets: [
              {
                data: Year_data[0],
                backgroundColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
                borderColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
              },
              {
                data: Year_data[1],
                backgroundColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
                borderColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
              },
              {
                data: Year_data[2],
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
      <div className="flex w-full space-x-4">
        <CardWithHeader
          className="w-[40%]"
          cardClassName="h-[400px] p-8"
          header={
            <h2 className="text-purple-600 font-medium text-lg">
              Disability Types
            </h2>
          }
        >
          <DoughnutChart
            data={{
              labels: disabilityTypes,
              datasets: [
                {
                  data: disabilityCount,
                  backgroundColor: ["#FC607C", "#14C9C9", "#F3D744"],
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
            <h2 className="text-purple-600 font-medium text-lg">
              Student count as per groups
            </h2>
          }
        >
          <BarChart
            data={{
              labels: GroupNumber,
              datasets: [
                {
                  data: StudentCount,
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
