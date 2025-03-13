import { BrowserRouter, Route, Routes } from "react-router";
import BaseLayout from "@/features/BaseLayout/BaseLayout";
import HomePage from "./pages/HomePage/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
