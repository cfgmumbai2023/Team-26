function TeacherListItem(props) {
  // const skillItems = teacher?.skills?.slice(0, 3)?.map((skill, index) => {
  //   return (
  //     <div
  //       key={index}
  //       className="text-xs px-3 py-1 font-medium bg-purple-100 text-purple-600 rounded-lg"
  //     >
  //       {skill}
  //     </div>
  //   );
  // });

  const teacher = props?.teacher;

  let averageStudentPerformanceScoreStyle = "";

  if (teacher?.average_student_score <= 3) {
    averageStudentPerformanceScoreStyle = "bg-purple-100 text-purple-600";
  } else if (teacher?.average_student_score <= 5) {
    averageStudentPerformanceScoreStyle = "bg-orange-100 text-orange-600";
  } else if (teacher?.average_student_score <= 7) {
    averageStudentPerformanceScoreStyle = "bg-yellow-100 text-yellow-900";
  } else {
    averageStudentPerformanceScoreStyle = "bg-green-100 text-green-600";
  }

  return (
    <div
      className="flex space-x-7 px-6 py-4 items-center bg-white rounded-lg shadow-none"
      onClick={() => {
        props?.onClick(teacher?.uid);
      }}
    >
      <div className="font-medium text-sm flex-shrink-0">{teacher?.uid}</div>
      <div className="w-[20%] flex-shrink-0 ">
        <h3 className="font-medium text-purple-600 text-sm">{teacher?.name}</h3>
      </div>
      <div
        className={`flex-shrink-0 text-xs font-medium px-2 py-1 rounded-md ${averageStudentPerformanceScoreStyle}`}
      >{`${teacher?.average_student_score}`}</div>
      <div className="flex space-x-3">{teacher?.levels_taught?.join(", ")}</div>
    </div>
  );
}

export default TeacherListItem;
