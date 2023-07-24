import { LandingPage } from "./pages/pageLanding";
import { Home } from "./pages/home";
import { Route, Routes, Outlet } from "react-router-dom";


export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Outlet />}>
        <Route index element={<LandingPage />} />
      </Route>

    </Routes>
  );
};
