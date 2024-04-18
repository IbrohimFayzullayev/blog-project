const Experience = () => {
  return (
    <section className="mb-10">
      <h2 className="text-base mb-10">Work Experience</h2>
      {experiences.map((experience, index) => (
        <div className="flex gap-4 mb-10" key={index}>
          <div className="w-2/5">
            <p className="opacity-50">{experience.date}</p>
          </div>
          <div className="w-3/4">
            <h3>{experience.title}</h3>
            {/* <a
              className="text-gray-500 hover:underline"
              href={`http://${experience.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.href}
            </a> */}
            <p className="my-1.5 text-sm text-gray-400">
              {experience.description}
            </p>
            <p className="opacity-50">{experience.stack}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const experiences = [
  {
    title: "Frontend Engineer - Radius Mobile",
    href: "radius.uz",
    date: "Nov.2022 - present",
    description:
      "I work here as a main frontend developer. I develop a web application for users and for the internal system of the company, and I automate complex processes in it, correct errors. I'm constantly developing and tweaking it to make it more user-friendly﹡",
    stack: "React • Next.js • Typescript • Tailwind",
  },
  {
    title: "Intern Fullstack Developer - Itransition",
    date: "Sep.2022 - Nov.2022",
    href: "itransition.com",
    description:
      "I tried myself in this internship, and it was very interesting and useful. An experienced programmer was mentoring in English. I created a new level for myself and learned what I needed to learn and moved on ﹡",
    stack: "React • Node.js • Express • MongoDB",
  },
  {
    title: "Student Developer - Magicsoft.uz",
    date: "Oct.2021 - July.2022",
    href: "magicsoft.uz",
    description:
      "I learned important skills from an experienced developer at this company. I was half day at the company and half day at the university and all my focus was on programming. Then I studied javascript and web programming in depth, and created real projects related to it ﹡",
    stack: "Javascript • React • CSS • Web Development",
  },
];

export default Experience;
