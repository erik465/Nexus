import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../redux/selectors";
import { setAuthToken, getUser } from "../redux/operations";
import { Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout";
import PrivateRoute from "./auth/PrivateRoute";
import PublicRoute from "./auth/PublicRoute";
import Logout from "./auth/Logout";

const WelcomePage = lazy(() => import("../pages/WelcomePage/WelcomePage"));
const DashboardPage = lazy(() =>
  import("../pages/DashboardPage/DashboardPage")
);
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      dispatch(getUser());
    }
  }, [dispatch, token]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <PrivateRoute>
                  <Logout />{" "}
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
