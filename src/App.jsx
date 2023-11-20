import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout.jsx";
import LandingPage from "./pages/Landing.jsx"

import DashboardLayout from "./layouts/Dashboard.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Maps from "./pages/dashboard/Maps.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import Tables from "./pages/dashboard/Tables.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<LandingPage />} />
          </Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Navigate to={"/dashboard/stats"} />} />
            <Route path="/dashboard/stats" index element={<Dashboard />} />
            <Route path="/dashboard/maps" element={<Maps />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/tables" element={<Tables />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
