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
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            in nulla posuere sollicitudin aliquam ultrices
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor lacus luctus accumsan tortor posuere ac. Praesent semper
            feugiat nibh sed pulvinar. Quam pellentesque nec nam aliquam sem et
            tortor consequat id. Auctor eu augue ut lectus arcu bibendum at.
            Arcu risus quis varius quam quisque id diam vel.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor lacus luctus accumsan tortor posuere ac. Praesent semper
            feugiat nibh sed pulvinar. Quam pellentesque nec nam aliquam sem et
            tortor consequat id. Auctor eu augue ut lectus arcu bibendum at.
            Arcu risus quis varius quam quisque id diam vel.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
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
