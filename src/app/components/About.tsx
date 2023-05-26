// ./src/app/components/About.tsx

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import logoDark from "../../../public/logo-dark.png";
import logoWhite from "../../../public/logo-white.png";
import Image from "next/image";

interface AboutProps {
  appColor: string;
}

export default function About({ appColor }: AboutProps) {
  const textColorClass = appColor === "bg-gray-950" ? "text-slate-300" : "text-gray-800";

  return (
    <div className="text-center p-10">
      <h2 className="text-5xl py-2 text-indigo-600 font-medium">
        Alexander Poliser
      </h2>
      <h3 className={`text-2xl py-2 ${textColorClass}`}>Full Stack Developer</h3>
      <p className={`text-md py-5 leading-8 ${textColorClass}`}>
        I&apos;m 21 years old and a Computer Engineering student, interested in
        improving and sharing my knowledge in Software Development and current
        market technologies.
      </p>
      <div className="text-5xl flex justify-center gap-20 py-3 text-gray-600">
        <a
          className={`cursor-pointer hover:text-indigo-600 ${textColorClass}`}
          href="https://www.linkedin.com/in/alexanderpoliser/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          className={`cursor-pointer hover:text-indigo-600 ${textColorClass}`}
          href="https://github.com/alexanderpoliser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
      <div className="relative w-60 h-60 mt-20 mx-auto">
        <Image
          src={appColor === "bg-gray-950" ? logoWhite : logoDark}
          width={240}
          height={240}
          alt="Alexander Poliser - logo"
          className="rounded-full"
          priority
          loading="eager"
        />
      </div>
    </div>
  );
}
