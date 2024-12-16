import React from "react";
import WhoWeAreTable from "../images/who-we-are-table.jpg";

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-[10px] min-h-[500px]">
      <div className="bg-[#fff] p-3 640:p-5 text-black">
        <img src={WhoWeAreTable} alt="who we are" />
      </div>
      <div className="bg-[#565656] p-2"></div>
    </div>
  );
};

export default WhoWeAre;
