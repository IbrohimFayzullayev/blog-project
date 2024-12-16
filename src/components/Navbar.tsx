import React from "react";
import { Link } from "react-router-dom";

const NavbarList = [
  { name: "Who are we?", link: "/who-we-are" },
  { name: "Date", link: "/date" },
  { name: "Institution", link: "/institution" },
];
const Navbar: React.FC = () => {
  return (
    <div className="bg-[#666666] text-white mt-[10px]">
      <div className="flex flex-row">
        {NavbarList.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="font-bold cursor-pointer px-[12px] py-[6px] top-navbar-text hover:bg-[#464646] 480:px-[20px] 480:py-[10px] 480:text-[1rem] 480:leading-[22px]"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
