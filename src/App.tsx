import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="px-[100px] py-[50px]">
      <h1 className="text-[60px] text-[#000] leading-[70px]">
        Exploring Collaborative Learning in the "Teach Together" Online
        Community
      </h1>
      <Navbar />
      <div className="grid mt-[20px] grid-cols-[1.5fr,3fr,1fr] gap-[40px]">
        <div className="bg-[#666] py-[15px] px-[15px] widget">
          <h2 className="text-[20px] font-medium text-[#fff] leading-[24px]">
            Introduction
          </h2>
          <div className="widget-content">
            <ul>
              <li>
                <a href="https://-">About the project</a>
              </li>
              <li>
                <a href="https://-">Research Objectives</a>
              </li>
              <li>
                <a href="https://-">Our Choice of community</a>
              </li>
            </ul>
            <div className="clear"></div>
          </div>
        </div>
        <div className="bg-[#444] p-3"></div>
        <div className="bg-[#565656] p-3"></div>
      </div>
    </div>
  );
}

export default App;
