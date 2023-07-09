import CardWithHeader from "../generic/CardWithHeader";
import BarChart from "../generic/chart/BarChart";
import DoughnutChart from "../generic/chart/DoughnutChart";
import { disabilityData } from "@/data/college/disabilityData";
import { teacherPerformancePerLevel } from "@/data/college/teacherPerformancePerLevel";
import { performanceScorePerDisability } from "@/data/college/performanceSorePerDisability";
import { useState } from "react";

const levels = [1, 2, 3];

const nums = [1, 2, 3, 4, 5];

function Charts(props) {
  const [teacherPerformanceChartLevel, setTeacherPerformanceChartLevel] =
    useState(levels[0]);

  const [
    perforamceScorePerDisabilityChartLevel,
    setPerformanceScorePerDisabilityChartLevel,
  ] = useState(levels[0]);

  const teacherPerformanceChartLevelChangeHandler = (event) => {
    setTeacherPerformanceChartLevel(event.target.value);
  };

  const perforamceScorePerDisabilityChartLevelChangeHandler = (event) => {
    setTeacherPerformanceChartLevel(event.target.value);
  };

  return (
    <div className="py-6 space-y-6 w-full">
      <CardWithHeader
        cardClassName="h-[400px] p-8"
        header={
          <div className="flex items-center justify-between">
            <h2 className="text-purple-600 font-medium text-lg">
              Average performance level of students per teacher
            </h2>
            <div className="space-x-4 flex items-center">
              <h2 className="font-medium text-purple-600">Level: </h2>
              <select
                className="text-sm px-3 py-1 mt-1 mb-2 bg-purple-100 text-purple-600 border-[1px] border-purple-600 rounded-md"
                value={teacherPerformanceChartLevel}
                onChange={teacherPerformanceChartLevelChangeHandler}
              >
                {levels?.map((level) => {
                  return (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        }
      >
        <BarChart
          data={{
            labels: Object.keys(teacherPerformancePerLevel),
            datasets: [
              {
                data: Object.values(teacherPerformancePerLevel),
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
            <h2 className="text-purple-600 font-medium text-lg">
              Disability Ratios
            </h2>
          }
        >
          <DoughnutChart
            data={{
              labels: Object.keys(disabilityData),
              datasets: [
                {
                  data: Object.values(disabilityData),
                  backgroundColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
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
            <div className="flex items-center justify-between">
              <h2 className="text-purple-600 font-medium text-lg">
                Performance Scores per Disability
              </h2>
              <div className="space-x-4 flex items-center">
                <h2 className="font-medium text-purple-600">Level: </h2>
                <select
                  className="text-sm px-3 py-1 mt-1 mb-2 bg-purple-100 text-purple-600 border-[1px] border-purple-600 rounded-md"
                  value={perforamceScorePerDisabilityChartLevel}
                  onChange={perforamceScorePerDisabilityChartLevelChangeHandler}
                >
                  {levels?.map((level) => {
                    return (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          }
        >
          <BarChart
            data={{
              labels: Object.keys(performanceScorePerDisability),
              datasets: [
                {
                  data: Object.values(performanceScorePerDisability),
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
