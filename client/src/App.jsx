import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StoreList from "./pages/StoreList";
import RatingPage from "./pages/RatingPage";
import AdminPanel from "./pages/AdminPanel";
import AddStore from "./pages/AddStore";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stores" element={<StoreList />} />
        <Route path="/add-store" element={<AddStore />} />
        <Route path="/rate/:storeId" element={<RatingPage />} />
        <Route path="/admin" element={<AdminPanel />} />{" "}
        {/* ✅ Add this route */}
      </Routes>
    </div>
  );
}

export default App;
