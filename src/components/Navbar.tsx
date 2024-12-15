import React from "react";

const NavbarList = [
  { name: "Who are we?" },
  { name: "Date" },
  { name: "Institution" },
];
const Navbar: React.FC = () => {
  return (
    <div className="bg-[#666666] text-white mt-[10px]">
      <div className="flex flex-row">
        {NavbarList.map((item, index) => (
          <div
            key={index}
            className="font-bold cursor-pointer px-[12px] py-[6px] top-navbar-text hover:bg-[#464646] 480:px-[20px] 480:py-[10px] 480:text-[1rem] 480:leading-[22px]"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
