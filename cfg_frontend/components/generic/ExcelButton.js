import ExcelIcon from "../../public/icons/ExcelIcon";

function ExcelButton(props) {
  return (
    <button className="flex items-center px-3 py-2 space-x-2 bg-purple-800 rounded-md" onClick={props?.onClick}>
        <ExcelIcon height="20" width="20" color="white"/>
        <p className="text-xs font-medium text-white">{props?.text}</p>
    </button>
  );
}

export default ExcelButton;
