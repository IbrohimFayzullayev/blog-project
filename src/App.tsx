import "./App.css";
import { useState, useEffect } from "react";
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
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Update dark mode class and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <AuthProvider>
        <MainApp darkMode={darkMode} setDarkMode={setDarkMode} />
      </AuthProvider>
    </div>
  );
}

function MainApp({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  const { setIsLoggedIn, isLoggedIn, loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <Router>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                Ibrohim
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16 text-gray-900 dark:text-white">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <div id="projects"><Projects /></div>
              <div id="skills"><Skills /></div>
              <div id="contact"><Contact /></div>
            </>
          } />
          <Route
            path="/auth/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          {isLoggedIn ? (
            <Route path="/admin" element={<Admin />} />
          ) : (
            <Route path="*" element={<Navigate to="/auth/login" />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
