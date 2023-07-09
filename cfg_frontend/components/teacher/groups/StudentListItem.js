import GroupsData from "../../../data/group.json";
import StudentsData from "../../../data/students.json";

function StudentListItem(props) {
  console.log("This is the data from props: \n");
  console.log(props.student.id);
  const skillItems = props?.skills?.slice(0, 3)?.map((skill, index) => {
    return (
      <div
        key={index}
        className="text-xs px-3 py-1 font-medium bg-purple-100 text-purple-600 rounded-lg"
      >
        {skill}
      </div>
    );
  });

  let resumeScoreStyle = "";
  let averagescore = props.student.avgscore; //display avg score

  if (props.student.averagescore <= 50) {
    //display student scores
    resumeScoreStyle = "bg-purple-100 text-purple-600";
  } else if (props?.resumeScore <= 70) {
    resumeScoreStyle = "bg-orange-100 text-orange-600";
  } else if (props?.resumeScore <= 90) {
    resumeScoreStyle = "bg-yellow-100 text-yellow-900";
  } else {
    resumeScoreStyle = "bg-green-100 text-green-600";
  }

  return (
    <div
      className="flex space-x-7 px-6 py-4 items-center bg-white rounded-lg shadow-none"
      onClick={() => {
        props?.onClick(props.student.id);
      }}
    >
      <div className="font-medium text-sm flex-shrink-0">
        {props.student.id}
      </div>
      <div className="w-[20%] flex-shrink-0 ">
        <h3 className="font-medium text-purple-600 text-sm">
          {props.student.name}
        </h3>
        <p className="text-xs">{props.student.gender}</p>
      </div>
      <div
        className={`flex-shrink-0 text-xs font-medium px-2 py-1 rounded-md ${resumeScoreStyle}`}
      >{`${props.student.avgscore} %`}</div>{" "}
      <div
        className={`flex-shrink-0 text-xs font-medium px-2 py-1 rounded-md ${resumeScoreStyle}`}
      >{`${props.student.age}`}</div>{" "}
      <div className="flex space-x-3">{skillItems}</div>{" "}
      {props.student.disability}
    </div>
  );
}

export default StudentListItem;
