import React from "react";
import ProjectItems from "./ProjectItems";
import philflixImg from "../public/pictures/Philflix.jpeg";
import comingsoonImg from "../public/pictures/comingsoon.jpg";
import cryptoImg from "../public/pictures/Crypto.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projekte
        </p>
        <h2 className="py-4">Was ich gemacht habe</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Crypto App"
            library="ReactJS"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItems
            title="Philflix App"
            library="ReactJS"
            backgroundImg={comingsoonImg}
            projectUrl="/philflix"
          />
          <ProjectItems
            title="Galaxy Travel"
            library="ReactJS"
            backgroundImg={comingsoonImg}
            projectUrl="/galaxy"
          />
          <ProjectItems
            title="Weather App"
            library="NextJS"
            backgroundImg={comingsoonImg}
            projectUrl="/weather"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
