import Arrow from "../images/arrow-link.svg";

const Links = () => {
  return (
    <>
      <h2 className="text-base mb-8 mt-14">Links</h2>
      {links.map((link, index) => (
        <div className="flex gap-4 mb-4" key={index}>
          <div className="w-2/5">
            <p className="opacity-50">{link.title}</p>
          </div>
          <div className="w-3/4 flex gap-1 items-center">
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {link.name}
            </a>
            <img src={Arrow} alt="arrow icon" />
          </div>
        </div>
      ))}
    </>
  );
};

const links = [
  {
    title: "Github",
    link: "https://github.com/IbrohimFayzullayev",
    name: "@IbrohimFayzullayev",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ibrohim-fayzullayev-9226bb224/",
    name: "@Ibrohim",
  },
  {
    title: "Telegram",
    link: "https://t.me/Ibrohim_Fayzullayev",
    name: "@Ibrohim_Fayzullayev",
  },
];
export default Links;
