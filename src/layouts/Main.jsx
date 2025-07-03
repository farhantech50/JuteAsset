import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/Navbar";

export default function Layout() {
  return (
    <main className="flex flex-col flex-grow min-h-screen ">
      <Navbar />
      <div className="flex-grow min-h-0">
        <Outlet />
      </div>
    </main>
  );
}
