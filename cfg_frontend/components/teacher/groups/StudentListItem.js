
function StudentListItem(props) {
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

  if (props?.resumeScore <= 50) {
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
        props?.onClick(props?.uid);
      }}
    >
      <div className="font-medium text-sm flex-shrink-0">{props?.uid}</div>
      <div className="w-[20%] flex-shrink-0 ">
        <h3 className="font-medium text-purple-600 text-sm">{props?.name}</h3>
        <p className="text-xs">{props?.gender}</p>
      </div>
      <div
        className={`flex-shrink-0 text-xs font-medium px-2 py-1 rounded-md ${resumeScoreStyle}`}
      >{`${props?.resumeScore} %`}</div>
      <div className="flex space-x-3">{skillItems}</div>
    </div>
  );
}

export default StudentListItem;
