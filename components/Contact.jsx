import Image from "next/image";
import React from "react";
import ContactImg from "../public/pictures/contact.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="relative flex justify-between items-center max-w-[900px] w-full m-auto pb-4 rounded-xl px-24 mb-4">
          {/* left */}
          <div>
            <div className="lg:p-4 h-full">
              <div className="hover:scale-105 ease-in duration-300">
                <Image className="rounded-xl" src={ContactImg} alt="/" />
              </div>
              <div>
                <h2 className="py-2">Philipp Gampe</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  Ich stehe für Vollzeit-Jobs zur Verfügung. Kontaktier mich und
                  lass uns darüber reden.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <p className="pt-2 pb-4 underline">Tel.:+49 170 24 88 443</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
        </div>
        <div className="items-center max-w-[800px] w-full m-auto shadow-xl shadow-gray-400 rounded-xl">
          <div className="p-4 relative flex justify-between text-center w-full text-[#5651e5]">
            <Link href="/privacy">
              <p className="underline cursor-pointer">Datenschutz</p>
            </Link>
            <Link href="/imprint">
              <p className="pl-16 underline cursor-pointer">Impressum</p>
            </Link>
            <div
              className="underline cursor-pointer"
              onClick={() => {
                window.klaro.show(window.klaroConfig);
              }}
            >
              <p>Cookie Konfiguration</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
