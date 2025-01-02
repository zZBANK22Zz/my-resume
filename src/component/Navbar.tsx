import { Github } from "lucide-react";

const MyNavbar = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <div className="navbar bg-base-100 px-4">
      <div className="flex justify-between items-center w-full">
        {/* Left side: Text */}
        <a className="btn btn-ghost text-xl text-shadow-sm">RESUME</a>

        {/* Right side: GitHub Logo */}
        {/* <a
          className="btn btn-ghost"
          href="https://github.com/zZBANK22Zz?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} color="#000" />
        </a> */}
        <div className="flex space-x-4">
          <a className="btn btn-ghost" onClick={() => handleScroll("section1")}>
            Home
          </a>
          <a className="btn btn-ghost" onClick={() => handleScroll("section2")}>
            About Me
          </a>
          <a className="btn btn-ghost" onClick={() => handleScroll("section3")}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
