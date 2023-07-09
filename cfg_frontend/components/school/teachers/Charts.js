import { studentsPerTeacher } from "../../../data/college/studentsPerTeacher";

function Charts() {
  return (
    <CardWithHeader
      cardClassName="h-[400px] p-8"
      header={
        <h2 className="text-purple-600 font-medium text-lg">
          Students per teacher
        </h2>
      }
    >
      <BarChart
        data={{
          labels: Object.keys(studentsPerTeacher),
          datasets: [
            {
              data: Object.values(studentsPerTeacher),
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
  );
}

export default Charts;
