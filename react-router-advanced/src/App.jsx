import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth";

function App() {
  const { login, logout } = useAuth();

  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>React Router Advanced Demo</h1>
        <button onClick={login} style={{ marginRight: "1rem" }}>Login</button>
        <button onClick={logout}>Logout</button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
