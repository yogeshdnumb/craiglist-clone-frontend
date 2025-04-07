import { Outlet } from "react-router";
import Header from "./components/Header";
import { AppSidebar } from "@/components/custom/AppSidebar";

export default function BaseLayout() {
  return (
    <>
      <AppSidebar />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
