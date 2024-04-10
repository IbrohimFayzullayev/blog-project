import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="w-[1200px] mx-auto my-8">
        <section id="projects">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="flex flex-wrap">
            <ProjectCard
              title="Project 1"
              description="Description of project 1."
              imageUrl="https://via.placeholder.com/300"
            />
            <ProjectCard
              title="Project 2"
              description="Description of project 2."
              imageUrl="https://via.placeholder.com/300"
            />
            {/* Add more ProjectCard components for additional projects */}
          </div>
        </section>
        <section id="about" className="my-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I'm Ibrohim, a passionate frontend developer with expertise in
            React, TypeScript, and Tailwind CSS. This is my portfolio showcasing
            some of my projects and skills.
          </p>
        </section>
        <section id="contact">
          <h2 className="text-3xl font-bold my-4">Contact</h2>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
