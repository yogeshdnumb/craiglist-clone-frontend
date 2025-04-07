import { BrowserRouter, Route, Routes } from "react-router";
import BaseLayout from "@/features/BaseLayout/BaseLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CatgoryGroupPage from "./pages/CatgoryGroupPage";
import RequireAuth from "@/components/custom/RequireAuth";
import LoginPage from "./pages/LoginPage";
import SecurePage from "./pages/SecurePage";
import CreatePage from "./pages/CreatePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route element={<BaseLayout />}>
          <Route path=":group" element={<CatgoryGroupPage />}></Route>
          <Route path="/:group/:category" element={<CategoryPage />}></Route>
        </Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route element={<RequireAuth />}>
          <Route path="/secure" element={<SecurePage />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
