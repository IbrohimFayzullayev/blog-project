import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout";
import Introduction from "./pages/Introduction";
import LiteratureReview from "./pages/LiteratureReview";
import Methodology from "./pages/Methodology";
import Conclusion from "./pages/Conclusion";
import References from "./pages/References";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/literature-review" element={<LiteratureReview />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/references" element={<References />} />
          <Route path="/data-analysis" element={<div>Data Analysis</div>} />
          <Route path="/findings" element={<div>Findings</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
