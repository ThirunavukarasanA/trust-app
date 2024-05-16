import React, { useEffect, useState } from "react";
import "../Assets/css/nav.css";
import GlobeAnimation from "./GlobeAnimation";
export default function Nav() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop + 100) {
          currentSection = section.getAttribute("id");
        }
      });
      // navLinks.forEach((link) => {
      //   link.classList.remove("active");
      //   if (link.getAttribute("href") === `#${currentSection}`) {
      //     link.classList.add("active");
      //   }
      // });
      navLinks.forEach((link) => {
        link.className = "bg-backg px-5 py-2 rounded-full";
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.className = "bg-black text-white px-5 py-2 rounded-full";
        }
      });
    });
  }, []);
  return (
    <div>
      <div className="sticky top-0">
        <nav>
          <div className="">
            <ul className="flex border justify-center glassbg p-2">
              <li className="text-h5 nnav mx-2">
                <a href="#globe" className="">
                  Globe Animation
                </a>
              </li>
              <li className="text-h5 nnav mx-2">
                <a href="#photo" className="">
                  Scroll View
                </a>
              </li>
              <li className="text-h5 nnav mx-2">
                <a href="#last" className="">
                  Final View
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <GlobeAnimation />
      {/* <section id="globe" className="h-[100vh]">
        <div className="">
          <div className="">
            <iframe
              src="https://www.pictramap.com/app/view?p=b204cc&paused=1"
              style={{ minHeight: "600px", minWidth: "740px" }}
              className="lg:h-[640px] lg:w-[100%] md:w-[100%] md:h-[100%] mdsm:w-[100%] mdsm:h-[450px] sm:w-[100%] sm:h-[700px]"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </section> */}
      <section id="photo" className="h-[100vh] border">
        <div className="">
          <div className="w-[150px] h-[150px] bg-black"></div>
        </div>
      </section>
      <section id="last" className="h-[100vh] border">
        <div className="">
          <div className="w-[150px] h-[150px] bg-green"></div>
        </div>
      </section>
    </div>
  );
}
