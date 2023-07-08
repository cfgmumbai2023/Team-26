import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    // Fetch student data from an API or any data source
    // and update the state
    fetchStudentData()
      .then(data => setStudentData(data))
      .catch(error => console.log(error));
  }, []);

  const fetchStudentData = async () => {
    // Simulated API call to fetch student data
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          grade: '10',
          subjects: ['Math', 'Science', 'English'],
          attendance: 92,
          assignments: [
            { id: 1, title: 'Math Homework', status: 'Completed' },
            { id: 2, title: 'Science Project', status: 'In Progress' },
            { id: 3, title: 'English Essay', status: 'Not Started' }
          ]
          // Add more relevant student data as needed
        });
      }, 1000); // Simulating delay for API response
    });
  };

  return (
    <div>
      {studentData ? (
        <div>
          <h3>Roll Number: {studentData.id}</h3>
          <h2>Name : {studentData.name}</h2>

          
          <h3>Subjects:</h3>
          <ul>
            {studentData.subjects.map(subject => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>

          <h3>Assignments:</h3>
          <ul>
            {studentData.assignments.map(assignment => (
              <li key={assignment.id}>
                {assignment.title} - {assignment.status}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
};

export default StudentDashboard;
