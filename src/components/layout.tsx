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
  // { name: "Data Analysis and Findings", link: "/data-analysis" },
  // { name: "Findings", link: "/findings" },
  // { name: "Conclusion", link: "/conclusion" },
  // { name: "References", link: "/references" },
];

const SideBars = [
  { name: "Conclusion", link: "/conclusion" },
  { name: "References", link: "/references" },
];

const SideBarNames2 = [
  {
    name: "Emotional presence and social engagement",
    link: "/findings/emotional-presence",
  },
  { name: "Mutual support in learning ", link: "/findings/social-presence" },
  { name: "Humor and informality", link: "/findings/humor-informality" },
  { name: "Sense of belonging", link: "/findings/sense-of-belonging" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="bg-[url('../src/images/bg-image2.JPG')] w-full h-full bg-cover bg-fixed overflow-auto"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="max-w-[1440px]	my-0 mx-auto">
        <div className="px-[20px] py-[20px] 640:p-[30px] 992:p-[40px] 1366:px-[60px] 1366:py-[50px]">
          <h1 className="text-[2rem] text-[#444] font-medium leading-tight 1366:text-[3.5rem] 1280:text-[3.5rem] 992:text-[2.5rem] 200:text-[1.5rem]">
            The Role of Social Presence in Enhancing Language Learning in Online
            Communities
          </h1>
          <Navbar />
          <div className="grid mt-[10px] grid-cols-[1fr,4fr,1fr] gap-[10px]">
            <div className="bg-[#666] py-[8px] px-[8px] widget 768:p-[15px]">
              <h2 className="navbar-heading mb-2 text-[#fff]">
                <Link to={"/"} className="hover:underline">
                  About project
                </Link>
              </h2>
              <div className="widget-content">
                <ul className="list-disc text-[#ccc]">
                  {SideBarNames.map((item) => (
                    <li className="mb-2 navbar-text">
                      <Link to={item.link} className="hover:underline ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <h2 className="navbar-text font-medium mb-2 text-[#fff]">
                      <Link to={"/data-analysis"} className="hover:underline">
                        Data Analysis and Findings
                      </Link>
                    </h2>
                    <div className="widget-content">
                      <ul className="list-decimal text-[#ccc]">
                        {SideBarNames2.map((item) => (
                          <li className="mb-2 navbar-text">
                            <Link to={item.link} className="hover:underline ">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="clear"></div>
                    </div>
                  </li>
                  {SideBars.map((item) => (
                    <li className="mb-2 navbar-text">
                      <Link to={item.link} className="hover:underline ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="clear"></div>
              </div>
            </div>
            <div className="bg-[#fff] p-3 640:p-5 text-black">{children}</div>
            <div className="bg-[#565656] p-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
