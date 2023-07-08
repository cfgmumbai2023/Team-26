import { useState } from "react";

const AppBar = () => {
  const [showLogout, setLogOut] = useState(false);
  return (
    <>
      <div className="w-full py-4 px-5 flex justify-end shadow-md ">
        <div className="flex space-x-4 items-end">
          <span className="text-sm font-medium">Paras Mehta</span>

          <button onClick={() => setLogOut(!showLogout)}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              height={30}
              width={30}
              className="rounded-full"
            ></img>
          </button>
        </div>
      </div>
      {showLogout && <div className=" flex items-center fixed top-12 right-5 px-10 py-3 shadow-md z-50 text-sm font-semibold ">
           <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
           <span className="ml-3 text-red-600">Log-Out</span></div>}
    </>
  );
};
export default AppBar;
