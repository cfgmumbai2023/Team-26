function CategoryNavbar(props) {
  return (
    <div className="border-b-2 w-[fit-content]">
      {props?.tabs?.map((tab, index) => {
        return (
          <button
            key={index}
            className={`px-4 py-2 ${
              props?.currentTab == tab &&
              "border-b-4 font-semibold border-b-purple-600 text-purple-600"
            }`}
            type="button"
            onClick={() => {
              props?.onTabClick(tab);
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryNavbar;
