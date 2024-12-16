import React from "react";

const Date = () => {
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-[10px] min-h-[500px]">
      <div className="bg-[#fff] p-3 640:p-5 text-black">
        <h2 className="content-heading">Date</h2>
        <p className="content-text">&emsp;17.12.2024</p>
      </div>
      <div className="bg-[#565656] p-2"></div>
    </div>
  );
};

export default Date;
