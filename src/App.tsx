import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout";
import Introduction from "./pages/Introduction";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/introduction" element={<Introduction/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
