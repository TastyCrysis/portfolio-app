import Image from "next/image";
import React from "react";
import cryptoImg from "../public/pictures/Crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[55%] max-w-[1240px] w-full left-[55%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crypto-App &#040;WIP&#041;</h2>
          <h3>ReactJS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="pb-3">Projekt</p>
          <h2>Übersicht</h2>
          <p className="py-4">
            Diese App wurde mit React JS gebaut und wird auf Firebase gehosted.
            Usern ist es möglich, mit ihrer Email-Adresse einen neuen Account zu
            erstellen. Sie können sich dann einloggen und Coins auf einer User
            spezifischen Liste speichern. Dies wird mit einer Firestore Cloud
            Storage Database ermöglicht, die zum Zeitpunkt der Registrierung
            erstellt wird. Ein weiteres Feature, ist dynamisches Routing mit dem
            React Router DOM Package. Die App nutzt die Coin Gecko API.
          </p>
          <a
            href="https://pcrypto.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/TastyCrysis/crypto-project"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Coin Gecko Api
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Routes
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
      <div className="max-w-[600px] m-auto shadow-xl shadow-gray-400 rounded-xl">
        <div className="p-2 relative flex justify-between text-justify w-full text-[#5651e5]">
          <Link href="/privacy">
            <p className="underline cursor-pointer">Datenschutz</p>
          </Link>
          <Link href="/imprint">
            <p className="underline cursor-pointer">Impressum</p>
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
    </div>
  );
};

export default crypto;
