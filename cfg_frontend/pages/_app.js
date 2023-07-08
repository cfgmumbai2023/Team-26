import AppBar from "../components/layout/AppBar";
import SideBar from "../components/generic/Sidebar/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen ">
      <SideBar />
      <div className="flex-grow overflow-y-auto h-screen w-[100%] bg-gray-100 text-black flex flex-col space-y-4">
        <div className="flex justify-between">
          <AppBar />
        </div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
