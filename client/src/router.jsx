// 📁 client/src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StoreList from "./pages/StoreList";
import RatingPage from "./pages/RatingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stores" element={<StoreList />} />
      <Route path="/rate/:storeId" element={<RatingPage />} />
    </Routes>
  );
};

export default AppRoutes;
