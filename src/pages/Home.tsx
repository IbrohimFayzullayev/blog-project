import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
// import Profile from "../images/profile.png";
// import Avatar from "../images/ibrohim.jpg";
import Me from "../images/me.jpg";
import Projects from "../components/Projects";
import Links from "../components/Links";
// import MePhoto from "../images/me-at-work.jpg";

const Home = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="fixed flex justify-between items-center text-white text-2xl text-center py-4 px-4 w-full top-0">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[50px] h-[50px]" />
        </Link>
        <button className="bg-blue-700 text-white font-normal text-base rounded-lg px-4 py-2 hover:bg-blue-600 transition-all duration-150">
          connect
        </button>
      </div>
      <div className="text-white py-[115px] ms-auto me-auto max-w-[500px] px-4">
        <section className="flex gap-3 items-center w-full mb-10">
          <img
            src={Me}
            alt="Ibrohim Fayzullayev"
            className="rounded-full w-[100px] h-[100px]"
          />
          <div>
            <h1 className="font-normal text-2xl">Fayzullayev Ibrohim</h1>
            <p className="text-gray-400 font-normal">
              Product-focused Frontend Developer
            </p>
            <p className="text-gray-300 font-medium">
              Next.js, TypeScript, React
            </p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-base mb-2">About</h2>
          <p className="text-gray-400 text-sm font-medium">
            GM, I'm Ibrohim. I enjoy building dynamic, creative products from
            start to finish. Focused on developing intuitive experiences that
            constantly grow and improve based on user metrics. Always shipping.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-base mb-10">Work Experience</h2>
          {experiences.map((experience, index) => (
            <div className="flex gap-4 mb-10" key={index}>
              <div className="w-2/5">
                <p className="opacity-50">{experience.date}</p>
              </div>
              <div className="w-3/4">
                <h3>{experience.title}</h3>
                <p className="my-1.5 text-sm text-gray-400">
                  {experience.description}
                </p>
                <p className="opacity-50">{experience.stack}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Projects section */}
        <Projects />

        {/* Links section */}
        <Links />
      </div>
    </div>
  );
};

const experiences = [
  {
    title: "Frontend Engineer - Radius Mobile",
    date: "Nov.2022 - present",
    description: "Building the Whole Wide World﹡",
    stack: "React • Next.js • Typescript • Tailwind",
  },
  {
    title: "Intern Fullstack Developer - Itransition",
    date: "Sep.2022 - Nov.2022",
    description: "Building the Whole Wide World﹡",
    stack: "React • Node.js • Express • MongoDB",
  },
  {
    title: "Student Developer - Magicsoft.uz",
    date: "Oct.2021 - July.2022",
    description: "Building the Whole Wide World﹡",
    stack: "Javascript • React • CSS • Web Development",
  },
];

export default Home;
