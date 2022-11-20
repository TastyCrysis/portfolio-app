import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/pictures/about.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Wer ich bin</h2>
          <p className="py-2 text-gray-600">
            2021 hat mir mein jüngerer Bruder, selbst ein Senior Developer, die
            Welt der Front-End Entwicklung gezeigt. Im vergangen Jahr habe ich
            mir grundlegende Skills in der Web-Entwicklung angeeignet. Ich freue
            mich sehr mein Können in realen Projekten unter Beweis zu stellen.
          </p>
          <p className="py-2 text-gray-600">
            Als Teil meines Lernprozesses, habe ich einige kleine Projekte
            gestaltet, und dabei eine Vielzahl an Tools und Techniken genutzt.
            Dadurch habe ich ein solides Wissen in JavaScript, React und Next JS
            entwickelt, einige API's entdeckt und CSS dafür verflucht, dass es
            nicht das tut was es soll.
          </p>
          <p className="py-2 text-gray-600">
            Ich bin motiviert mich noch tiefer in die Front-End und
            Web-Entwicklung einzuarbeiten und möchte weiterhin mit dir als
            Entwickler wachsen.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Sieh dir hier meine aktuellen Projekte an.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
