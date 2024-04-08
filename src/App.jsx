import React from "react";
import { BrowserRouter as Router, Route, Routes , Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<ProtectedRoute element={Home} />} />
        <Route path="/home/:_id" element={<ProtectedRoute element={DetailPage} />} />
      </Routes>
    </Router>
  );
}

export default App;
