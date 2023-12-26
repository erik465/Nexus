import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <p>Welcome</p> <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default WelcomePage;
