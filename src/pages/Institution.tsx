import React from "react";
// import InstitutionTable from "../images/institution-table.jpg";

const Institution = () => {
  return (
    <div className="grid grid-cols-[4fr,1fr] gap-[10px] min-h-[500px]">
      <div className="bg-[#fff] p-3 640:p-5 text-black">
        <h2 className="content-heading">Institution</h2>
        <p className="content-text">
          &emsp;Jeonbuk National University , English Department , PhD
        </p>
        {/* <img src={InstitutionTable} alt="institution table" /> */}
      </div>
      <div className="bg-[#565656] p-2"></div>
    </div>
  );
};

export default Institution;
