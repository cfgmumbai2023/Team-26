import React, { useState, useEffect } from 'react';
import BarChart from '../../components/generic/chart/BarChart';
import CardWithHeader from '../../components/generic/CardWithHeader';
let data = require("../../data/students.json");
const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [programLabel, setProgramLabel] = useState(null);
  const [programValue, setProgramValue] = useState(null);
  const [objectiveLabel, setObjectiveLabel] = useState(null);
  const [objectiveValue, setObjectiveValue] = useState(null);
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

  useEffect(() => {
    if (objectiveLabel != null)
      console.log(objectiveLabel);
  }, [objectiveLabel])

  const fetchStudentData = async () => {
    await setStudentData(data.students[0]);
  };

  const defineData = () => {
    let pro_label = [], pro_value = [], score = 0, program_count = 0, obj_label = [], obj_value = [];

    for (let program_ind in studentData.program) {
      pro_label.push(studentData.program[program_ind].name);
      let sum = 0, count = 0;
      for (let objective of studentData.program[program_ind].objective) {
        sum += objective.score;
        count++;
        if (program_ind == 0) {
          obj_label.push(objective.name);
          obj_value.push(objective.score);
        }
      }
      if (program_ind == 0) {
        setObjectiveLabel(obj_label);
        setObjectiveValue(obj_value);
      }
      let result = sum / count;
      pro_value.push(result);
      score += result;
      program_count++;
    }
    setProgramLabel(pro_label);
    setProgramValue(pro_value);
    setFinalScore(score / program_count);
    // console.log(objectiveLabel);
  }

  const setAttribute = (obj) => {
    let label = [], value = [];
    for (let programs of studentData.program) {
      if (programs.name === obj) {
        for (let objective of programs.objective) {
          label.push(objective.name);
          value.push(objective.score);
        }
        setObjectiveLabel(label);
        setObjectiveValue(value);
      }
    }
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
              <h2 className="text-purple-600 font-medium text-lg">Performace based on program</h2>
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

          <h3>Subjects:</h3>
          <select onChange={(e) => setAttribute(e.target.value)}>
            {studentData.program.map(subject => (
              <option value={subject.name}>{subject.name}</option>
            ))}</select>
          <CardWithHeader
            cardClassName="h-[400px] p-8"
            header={
              <h2 className="text-purple-600 font-medium text-lg">Performace based on objective</h2>
            }
          >
            <BarChart data={{
              labels: objectiveLabel,
              datasets: [
                {
                  data: objectiveValue,
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
