import { ToastContainer } from "react-toastify";
import SideBar from "../SideBar";
import ProtectedRoutes from "./ProtectedRoutes";

const Base = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white font-secondary">
      <ToastContainer />
      <div className="h-screen w-screen flex">
        <aside className="h-full w-1/6 shadow">
          <SideBar />
        </aside>
        <main className="flex-1 overflow-scroll ">
          <div className="bg-primary flex justify-end items-center px-8 h-16">
            <h1 className="text-base font-bold text-center text-white">
              admin@xo.ke
            </h1>
          </div>
          <ProtectedRoutes />
        </main>
      </div>
    </div>
  );
};

export default Base;
