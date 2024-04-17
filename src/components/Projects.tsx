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
    description: "Building the Whole Wide World",
    stack: "Next.js • Typescript • Tailwind • SSR • Websocket",
  },
  {
    title: "Admin Dashboard for radius.uz",
    status: "Paused",
    description: "Building the Whole Wide World",
    stack: "Next.js • Typescript • Bootstrap",
  },
  {
    title: "E-commerce Website - radius.uz",
    status: "completed",
    description: "Building the Whole Wide World",
    stack: "Next.js • Javascript • SCSS • SSR",
  },
];
export default Projects;
