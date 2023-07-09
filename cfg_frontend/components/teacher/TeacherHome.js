import moment from "moment";
import { useState } from "react";
import CategoryNavbar from "../generic/CategoryNavbar";
import Charts from "./Charts";
import Groups from "./groups/Groups";

const date = moment().format("DD-MM-YYYY");
const tabs = ["Overview", "Groups"];

function TeacherHome(props) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const tabChangeHandler = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="w-full relative px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] text-purple-600 font-medium mb-6">
          Welcome back, Tanisha
        </h1>
      </div>

      <CategoryNavbar
        tabs={tabs}
        onTabClick={tabChangeHandler}
        currentTab={currentTab}
      />

      {currentTab == tabs[0] && <Charts />}
      {currentTab == tabs[1] && <Groups />}
    </div>
  );
}

export default TeacherHome;
