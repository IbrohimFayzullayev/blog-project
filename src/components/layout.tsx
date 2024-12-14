import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const SideBarNames = [
  { name: "Introduction", link: "/introduction" },
  { name: "Literature Review", link: "/literature-review" },
  { name: "Methodology", link: "/methodology" },
  { name: "Data Analysis", link: "/data-analysis" },
  { name: "Findings", link: "/findings" },
  { name: "Conclusion", link: "/conclusion" },
  { name: "References", link: "/references" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[url('../src/images/bg-img.jpg')] w-full min-h-screen bg-cover">
      <div className="max-w-[110rem] min-w-[30rem]	my-0 mx-auto">
        <div className="px-[60px] py-[50px]">
          <h1 className="text-[60px] text-[#fcf1f1] leading-[70px]">
            The Role of Social Presence in Enhancing Language Learning in Online
            Communities
          </h1>
          <Navbar />
          <div className="grid mt-[20px] grid-cols-[1fr,4fr] gap-[30px]">
            <div className="bg-[#666] py-[15px] px-[15px] widget">
              <h2 className="text-xl font-medium mb-2 text-[#fff] leading-[24px]">
                <Link to={"/"} className="hover:underline">
                  About project
                </Link>
              </h2>
              <div className="widget-content">
                <ul className="list-disc text-[#ccc]">
                  {SideBarNames.map((item) => (
                    <li className="mb-2">
                      <Link to={item.link} className="hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="clear"></div>
              </div>
            </div>
            <div className="bg-[#fff] p-3 text-black">{children}</div>
            {/* <div className="bg-[#565656] p-3"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
