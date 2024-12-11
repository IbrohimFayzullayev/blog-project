import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-[#666666] text-white mt-[20px]">
      <div className="flex gap-[20px]">
        <div className="font-bold cursor-pointer px-[27px] py-[18px] text-[18px] leading-[18px] hover:bg-[#464646]">
          Who are we?
        </div>
        <div className="font-bold cursor-pointer px-[27px] py-[18px] text-[18px] leading-[18px] hover:bg-[#464646]">
          Date
        </div>
        <div className="font-bold cursor-pointer px-[27px] py-[18px] text-[18px] leading-[18px] hover:bg-[#464646]">
          Institution
        </div>
      </div>
    </div>
  );
};

export default Navbar;
