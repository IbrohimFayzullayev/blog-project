import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[url('../src/images/bg-img.jpg')] w-full h-full fixed bg-cover	min-w-[1400px]">
      <div className="px-[60px] py-[50px]">
        <h1 className="text-[60px] text-[#000] leading-[70px]">
          Exploring Collaborative Learning in the "Teach Together" Online
          Community
        </h1>
        <Navbar />
        <div className="grid mt-[20px] grid-cols-[1.5fr,3fr,1fr] gap-[30px]">
          <div className="bg-[#666] py-[15px] px-[15px] widget">
            <h2 className="text-[20px] font-medium mb-2 text-[#fff] leading-[24px]">
              Introduction
            </h2>
            <div className="widget-content">
              <ul className="list-disc text-[#ccc]">
                <li className="mb-2">
                  <a href="#s" className="hover:underline">
                    About the project
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#s" className="hover:underline">
                    Research Objectives
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#s" className="hover:underline">
                    Our Choice of community
                  </a>
                </li>
              </ul>
              <div className="clear"></div>
            </div>
          </div>
          <div className="bg-[#fff] p-3"></div>
          <div className="bg-[#565656] p-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
