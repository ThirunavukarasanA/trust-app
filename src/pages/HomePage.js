import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GlobeAnimation from "../components/GlobeAnimation";
import Nav from "../components/Nav";
import PhotoScroll from "../components/PhotoScroll";
import VideoMessage from "../components/VideoMessage";
// import ScrollSection from "./ScrollSection";

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // const sectionOffsets = Array.from(
    //   document.querySelectorAll(".section")
    // ).map((section) => section.offsetTop);
    // const currentScrollPos = window.scrollY;
    // const activeIndex = sectionOffsets.findIndex(
    //   (offset) => currentScrollPos >= offset
    // );
    // setActiveSection(activeIndex === -1 ? 0 : activeIndex);
    // console.log("position : ", position);
    // if (position > 100) {
    //   setIsScrolled(true);
    // } else {
    //   setIsScrolled(false);
    // }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log("Scroll : ", scrollPosition);
  // console.log("Active section : ", activeSection);
  return (
    <div>
      <Header />
      <div className="sticky top-0">
        <Nav />
      </div>
      {/* <GlobeAnimation title="Section 1" isActive={activeSection === 0} />
      <PhotoScroll title="Section 2" isActive={activeSection === 1} />
      <VideoMessage title="Section 3" isActive={activeSection === 2} /> */}
      {/* <ScrollSection /> */}
    </div>
  );
}
