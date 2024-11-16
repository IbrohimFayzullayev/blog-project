import Me from "../images/me.jpg";
import Projects from "../components/Projects";
import Links from "../components/Links";
import Experience from "../components/Experience";

const Home = () => {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Software Engineer Portfolio - Ibrohim Fayzullayev",
    description: "Ibrohim Fayzullayev's portfolio website",
    image: "https://ibrohim.site/ibrohim.jpg",
    author: {
      "@type": "Person",
      name: "Ibrohim Fayzullayev",
      url: "https://ibrohim.site/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://ibrohim.site/",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <div className="bg-white dark:bg-gray-900 w-full min-h-screen transition-colors duration-200">
        <div className="fixed flex justify-between items-center text-gray-900 dark:text-white text-2xl text-center py-4 px-4 w-full top-0 backdrop-blur-sm z-10 bg-white/80 dark:bg-gray-900/80">
          <div></div>
          <button className="bg-blue-600 text-white font-normal text-base rounded-lg px-4 py-2 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200">
            CV
          </button>
        </div>
        <div className="text-gray-900 dark:text-white py-[115px] ms-auto me-auto max-w-[600px] px-4">
          <section className="flex gap-3 items-center w-full mb-10">
            <img
              src={Me}
              alt="Ibrohim Fayzullayev"
              className="rounded-full w-[100px] h-[100px]"
            />
            <div>
              <h1 className="font-normal text-2xl">Fayzullayev Ibrohim</h1>
              <p className="text-gray-600 dark:text-gray-400 font-normal">
                Product-focused Frontend Developer
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Next.js, TypeScript, React
              </p>
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-base mb-2">About</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              I'm Ibrohim. I enjoy building dynamic, creative products from
              start to finish. Focused on developing intuitive experiences that
              constantly grow and improve based on user metrics.
            </p>
          </section>
          {/* Experiences section */}
          <Experience />

          {/* Projects section */}
          <Projects />

          {/* Links section */}
          <Links />
        </div>
      </div>
    </>
  );
};

export default Home;
