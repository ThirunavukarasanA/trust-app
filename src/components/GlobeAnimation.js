import React, { useRef, useEffect } from "react";
import "../Assets/css/style.css";
import LifeVideo from "../Assets/videos/not ok.mp4";
import MobLifeVideo from "../Assets/videos/not ok p.mp4";
export default function GlobeAnimation() {
  const videoRef = useRef(null);
  const mobileRef = useRef(null);
  useEffect(() => {
    const videoElement = videoRef.current;
    const mobvideoElement = mobileRef.current;
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play().catch((error) => {
            console.error("Error attempting to play the video:", error);
          });
          mobvideoElement.play().catch((err) => {
            console.log("Error attempting to paly the mobile video", err);
          });
        } else {
          videoElement.pause();
          mobvideoElement.pause();
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    if ((videoElement, mobvideoElement)) {
      observer.observe(videoElement);
      observer.observe(mobvideoElement);
    }
    return () => {
      if ((videoElement, mobvideoElement)) {
        observer.unobserve(videoElement);
        observer.unobserve(mobvideoElement);
      }
    };
  }, []);
  return (
    <section id="globe" className="">
      <div className="lg:block lge:block md:block mdsm:hidden sm:hidden">
        <video ref={videoRef} autoPlay muted playsInline className="w-[100%]">
          <source src={LifeVideo} type="video/mp4" />
        </video>
      </div>
      <div className="lg:hidden lge:hidden md:hidden mdsm:block sm:block">
        <video ref={mobileRef} autoPlay muted playsInline className="w-[100%]">
          <source src={MobLifeVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
