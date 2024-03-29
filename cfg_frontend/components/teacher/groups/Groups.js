import CardWithHeader from "../../generic/CardWithHeader";
import StudentListItem from "./StudentListItem";
import { useEffect, useState } from "react";
import GroupsData from "../../../data/group.json";
import StudentsData from "../../../data/students.json";
import axios from "axios";

const groups = ["1", "2", "3"];

function Groups(props) {
  const [currentGroup, setCurrentGroup] = useState(groups[0]);
  const [studentsPerGroup, setStudentsPerGroup] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(`http://localhost:5000/api/group`);
  };

  useEffect(() => {
    currentGroup && fetchData();
  }, [currentGroup]);

  const studentsInGroup = StudentsData.students.filter(
    (student) => student.belongsTo === `Group ${currentGroup}`
  );

  return (
    <CardWithHeader
      header={
        <div>
          <h2>Groups</h2>
          <div>
            <select
              value={currentGroup}
              onChange={(e) => setCurrentGroup(e.target.value)}
            >
              <option value="">Select a group</option>
              {GroupsData.groups.map((group) => (
                <option key={group.group_number} value={group.group_number}>
                  Group {group.group_number}
                </option>
              ))}
            </select>
            <p>Selected Group: {currentGroup}</p>
          </div>
        </div>
      }
    >
      <div>
        {studentsInGroup?.map((student) => {
          return <StudentListItem key={student.id} student={student} />;
        })}
      </div>
    </CardWithHeader>
  );
}

export default Groups;
