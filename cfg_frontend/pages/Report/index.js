import React, { useEffect, useState } from 'react'
let data = require("../../data/students.json")

export default function index() {
    const [studentData, setStudentData] = useState(null);
    const [updateValue, setUpdateValue] = useState(null);

    useEffect(() => {
        fetchStudentData()
            .then(data => setStudentData(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        setUpdateValue(studentData);
    }, [studentData]);

    const fetchStudentData = async () => {
        // Simulated API call to fetch student data
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(data.students[0]);
            }, 1000);
        });
    };

    const CreateReport = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        result = await result.json();
    }


    const [formData, setFormData] = useState({});

    const dynamicData = [];
    const Submit = () => {
        console.log(updateValue);
    }

    // Handle form input change
    const handleChange = (event, name, subject) => {
        let programs = updateValue.program;
        for (let key in programs) {
            if (programs[key] === subject) {
                let obj = updateValue.program[key].objective;
                for (let key2 in obj) {
                    if (obj[key2].name === name) {
                        obj[key2].score == event;
                    }
                }
                programs[key].objective == obj;
            }
        }
        programs = updateValue.program;
        console.log(programs);
        setUpdateValue(programs);
    };

    return (
        <div className='h-screen'>
            <h1>Update Data</h1>
            {studentData ? (
                <ul>
                    {studentData.program.map(subject => (
                        <li value={subject.name}>Program Name : {subject.name}
                            <ul>
                                {subject.objective.map(obj => (
                                    <li value={obj.name}>
                                        {obj.name} : <input type="number" value={obj.score} onChange={(event) => handleChange(event, obj.name, subject.name)} />
                                    </li>
                                ))}
                            </ul>

                        </li>
                    ))}</ul>) : (<p>Loading student data...</p>
            )}
            <button type="submit" className="submit" onSubmit={CreateReport}>Submit</button>
            <button type="reset" className="submit">Reset</button>
        </div >
    )
};