import { teacherData } from "../../../data/college/teacherData";
import { useEffect, useState } from "react";
import CardWithHeader from "../../generic/CardWithHeader";
import TeacherListItem from "./TeacherListItem";

const levels = [1, 2, 3];

function Teachers(props) {
  const [teachersData, setTeachersData] = useState([]);
  const [teacherLevel, setTeacherLevel] = useState(levels[0]);

  const teacherLevelChangeHandler = (event) => {
    setTeacherLevel(parseInt(event.target.value));
  };

  useEffect(() => {
    const filteredTeachers = teacherData?.filter((teacher) => {
      return teacher?.levels_taught.includes(teacherLevel);
    });
    console.log(filteredTeachers);
    setTeachersData(filteredTeachers);
  }, [teacherLevel]);

  return (
    <div className="flex">
      <CardWithHeader
        cardClassName="flex-grow space-y-4 shadow-none py-0 px-0 overflow-y-auto max-h-[500px]"
        color="transperant"
        className="flex-grow"
        header={
          <div className="flex justify-between items-center py-6">
            <h2 className="text-purple-600 font-medium text-lg">Teachers</h2>
            <div className="space-x-4 flex items-center">
              <h2 className="font-medium text-purple-600">Level: </h2>
              <select
                className="text-sm px-3 py-1 mt-1 mb-2 bg-purple-100 text-purple-600 border-[1px] border-purple-600 rounded-md"
                value={teacherLevel}
                onChange={teacherLevelChangeHandler}
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
        {teachersData?.map((teacher, index) => {
          console.log(teacher);
          return (
            <TeacherListItem teacher={teacher} key={index} onClick={() => {}} />
          );
        })}
      </CardWithHeader>
    </div>
  );
}

export default Teachers;
