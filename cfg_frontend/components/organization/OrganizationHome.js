import Card from "../generic/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSchool,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import Charts from "./Charts";

function OrganizationHome(props) {
  return (
    <div className="px-8">
      <div className="flex space-x-4">
        <Card className={" my-3 py-3 flex items-center"} color="purple-500">
          <div className="h-[60px] w-[60px] rounded-full bg-gray-300 bg-opacity-30 text-white mx-4 text-lg flex justify-center items-center ">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="h-[100%] m-5 ml-0 w-[60%] mr-6 flex flex-col justify-center  ">
            <h2 className="text-lg font-bold text-white">{250}</h2>
            <p className="text-gray-200 text-xs w-[80%]">{"Total Students"}</p>
          </div>
        </Card>
        <Card className={" my-3 py-3 flex items-center"} color="purple-500">
          <div className="h-[60px] w-[60px] rounded-full bg-gray-300 bg-opacity-30 text-white mx-4 text-lg flex justify-center items-center ">
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div className="h-[100%] m-5 ml-0 w-[60%] mr-6 flex flex-col justify-center  ">
            <h2 className="text-lg font-bold text-white">{25}</h2>
            <p className="text-gray-200 text-xs w-[80%]">{"Total Schools"}</p>
          </div>
        </Card>
        <Card className={" my-3 py-3 flex items-center"} color="purple-500">
          <div className="h-[60px] w-[60px] rounded-full bg-gray-300 bg-opacity-30 text-white mx-4 text-lg flex justify-center items-center ">
            <FontAwesomeIcon icon={faMapLocation} />
          </div>
          <div className="h-[100%] m-5 ml-0 w-[60%] mr-6 flex flex-col justify-center  ">
            <h2 className="text-lg font-bold text-white">{8}</h2>
            <p className="text-gray-200 text-xs w-[80%]">{"Total Districts"}</p>
          </div>
        </Card>
        {/* <Card className={" my-3 py-3 flex items-center"} color="purple-500">
          <div className="h-[60px] w-[60px] rounded-full bg-gray-300 bg-opacity-30 text-white mx-4 text-lg flex justify-center items-center ">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="h-[100%] m-5 ml-0 w-[60%] mr-6 flex flex-col justify-center  ">
            <h2 className="text-lg font-bold text-white">{250}</h2>
            <p className="text-gray-200 text-xs w-[80%]">{"Total Students"}</p>
          </div>
        </Card> */}
      </div>
      <Charts />
    </div>
  );
}

export default OrganizationHome;
