import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout";
import PrivateRoute from "./auth/PrivateRoute";

const WelcomePage = lazy(() => import("../pages/WelcomePage/WelcomePage"));
const DashboardPage = lazy(() =>
  import("../pages/DashboardPage/DashboardPage")
);

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
