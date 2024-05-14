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
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
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
  return (
    <div>
      <Header />
      <div className="sticky top-0">
        <Nav />
      </div>
      <GlobeAnimation />
      <PhotoScroll />
      <VideoMessage />
      {/* <ScrollSection /> */}
    </div>
  );
}
