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
import { AuthProvider, useAuth } from "./context/auth";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </>
  );
}

function MainApp() {
  const { setIsLoggedIn, isLoggedIn, loading } = useAuth();

  if (loading) return <Loading />;

  return (
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
  );
}

export default App;
