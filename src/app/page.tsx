"use client";
import { useState } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Technologies from "./components/Technologies";


export default function Home() {
  const [appColor, setAppColor] = useState("bg-slate-200");

  const handleColorChange = () => {
    setAppColor(appColor === "bg-slate-200" ? "bg-gray-950" : "bg-slate-200");
  };

  return (
    <div>
      <main className={`${appColor} px-10 min-h-screen`}>
        <section>
          <nav className="py-10 mb-12 flex justify-end">
            <ul className="ml-6 flex items-center">
            {appColor === "bg-slate-200" && (
                <li>
                  <BsFillMoonFill
                    className="cursor-pointer text-2xl"
                    onClick={handleColorChange}
                  />
                </li>
              )}
              {appColor === "bg-gray-950" && (
                <li>
                  <BsSunFill
                    className="cursor-pointer text-2xl text-white"
                    onClick={handleColorChange}
                  />
                </li>
              )}
              <li>
                <a
                  className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-4 py-2 ml-8 rounded-md"
                  href="C.V. - Alexander Poliser (English ver.).pdf"
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <About appColor={appColor} />
        </section>

        <section className="flex justify-center">
          <Technologies appColor={appColor}/>
        </section>

        <section className="pb-10">
          <WorkExperience appColor={appColor}/>
        </section>
      </main>
    </div>
  );
}
