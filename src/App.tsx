import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { authAxios } from "./utils/axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    authAxios.defaults.headers.Authorization = `Bearer ${token}`;
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          {/* Conditional rendering based on login status */}
          {isLoggedIn ? (
            <Route path="/admin" element={<Admin />} />
          ) : (
            <Route path="*" element={<Navigate to="/auth/login" />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
