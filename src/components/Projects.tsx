const Projects = () => {
  return (
    <>
      <h2 className="text-base mt-14 mb-8">Projects</h2>
      {myProjects.map((project, index) => (
        <div className="flex gap-4 mb-10" key={index}>
          <div className="w-2/5">
            <p className="opacity-50">{project.status}</p>
          </div>
          <div className="w-3/4">
            <h3>{project.title}</h3>
            <p className="my-1.5 text-sm text-gray-400">
              {project.description}
            </p>
            <p className="opacity-50">{project.stack}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const myProjects = [
  {
    title: "CRM System - Radius Mobile",
    status: "Ongoing",
    description:
      "We are developing CRM for the company's internal system. It is designed to be convenient and easy for customers and contains complex processes inside. It becomes easier for employees to communicate with clients, and the scoring system for risk managers is fully automated. The system is constantly evolving and improving based on user metrics.",
    stack: "Next.js • Typescript • Tailwind • SSR • Websocket",
  },
  {
    title: "Admin Dashboard for radius.uz",
    status: "Paused",
    description:
      "I created the frontend part of the admin site for the radius.uz site, with which you can manage complete information, content, and products on the e-commerce website.",
    stack: "Next.js • Typescript • Bootstrap",
  },
  {
    title: "E-commerce Website - radius.uz",
    status: "completed",
    description:
      "Through this site, customers can order and buy the desired product without going to the store. I have been improving its SEO for a long time and it is currently rated as good SEO by clients.",
    stack: "Next.js • Javascript • SCSS • SSR",
  },
];
export default Projects;
