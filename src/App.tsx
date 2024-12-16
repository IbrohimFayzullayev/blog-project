import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout";
import Introduction from "./pages/Introduction";
import LiteratureReview from "./pages/LiteratureReview";
import Methodology from "./pages/Methodology";
import Conclusion from "./pages/Conclusion";
import References from "./pages/References";
import WhoWeAre from "./pages/WhoWeAre";
import Institution from "./pages/Institution";
import Date from "./pages/Date";

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
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/date" element={<Date />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
