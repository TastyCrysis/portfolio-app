import React from "react";
import ProjectItems from "./ProjectItems";
import philflixImg from "../public/pictures/Philflix.jpeg";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Philflix App"
            backgroundImg={philflixImg}
            projectUrl="https://philflix.netlify.app/"
          />
          <ProjectItems
            title="Philflix App"
            backgroundImg={philflixImg}
            projectUrl="/philflix"
          />
          <ProjectItems
            title="Philflix App"
            backgroundImg={philflixImg}
            projectUrl="/philflix"
          />
          <ProjectItems
            title="Philflix App"
            backgroundImg={philflixImg}
            projectUrl="/philflix"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
