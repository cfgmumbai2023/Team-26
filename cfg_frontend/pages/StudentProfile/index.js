import React, { useState, useEffect } from 'react';
import BarChart from '../../components/generic/chart/BarChart';
import CardWithHeader from '../../components/generic/CardWithHeader';
let data = require("../../data/students.json");
const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [programLabel, setProgramLabel] = useState(null);
  const [programValue, setProgramValue] = useState(null);
  const [finalScore, setFinalScore] = useState(null);

  useEffect(() => {
    // Fetch student data from an API or any data source
    // and update the state
    fetchStudentData();
  }, []);

  useEffect(() => {
    if (studentData != null)
      defineData();
  }, [studentData])
  const fetchStudentData = async () => {
    await setStudentData(data.students[0]);
  };

  const defineData = () => {
    let label = [], value = [], score = 0, program_count = 0;
    for (let programs of studentData.program) {
      label.push(programs.name);
      let sum = 0, count = 0;
      for (let objective of programs.objective) {
        sum += objective.score;
        count++;
      }
      let result = sum / count;
      value.push(result);
      score += result;
      program_count++;
    }
    setProgramLabel(label);
    setProgramValue(value);
    setFinalScore(score/program_count);
  }
  return (
    <div>
      {studentData ? (
        <div>
          <h2>Roll Number: {studentData.id}</h2>
          <h2>Name : {studentData.name}</h2>
          <h2>Disability faced : {studentData.disability}</h2>
          <h2>Overall Score: {finalScore}</h2>

          <CardWithHeader
            cardClassName="h-[400px] p-8"
            header={
              <h2 className="text-purple-600 font-medium text-lg">Top 10 Skills</h2>
            }
          >
            <BarChart data={{
              labels: programLabel,
              datasets: [
                {
                  data: programValue,
                  backgroundColor: ["#FC607C", "#FCA948", "#F3D744", "#14C9C9"],
                },
              ],
            }} options={{
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
                },
              },
            }} /> </CardWithHeader>
          {/* <h3>Subjects:</h3>
          <ul>
            {studentData.subjects.map(subject => (
              <li key={subject}>{subject}</li>
            ))}
          </ul> */}

          {/* <h3>Assignments:</h3>
          <ul>
            {studentData.assignments.map(assignment => (
              <li key={assignment.id}>
                {assignment.title} - {assignment.status}
              </li>
            ))}
          </ul> */}
        </div>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
};

export default StudentDashboard;
