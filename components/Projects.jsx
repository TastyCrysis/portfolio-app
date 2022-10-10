import React from "react";
import ProjectItems from "./ProjectItems";
import philflixImg from "../public/pictures/Philflix.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Crypto App"
            library="ReactJS"
            backgroundImg={philflixImg}
            projectUrl="/crypto"
          />
          <ProjectItems
            title="Philflix App"
            library="ReactJS"
            backgroundImg={philflixImg}
            projectUrl="/philflix"
          />
          <ProjectItems
            title="Galaxy Travel"
            library="ReactJS"
            backgroundImg={philflixImg}
            projectUrl="/galaxy"
          />
          <ProjectItems
            title="Weather App"
            library="NextJS"
            backgroundImg={philflixImg}
            projectUrl="/weather"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
