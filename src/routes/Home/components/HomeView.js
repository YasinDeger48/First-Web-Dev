import React from "react";
import AuthView from "./AuthView";

export const HomeView = () => (
  <div className="home-container">
    <div className="container">
      <h1>Learn English with TOMMY</h1>
      <h2>Easy & Fast</h2>
      <AuthView />
    </div>
  </div>
);

export default HomeView;
