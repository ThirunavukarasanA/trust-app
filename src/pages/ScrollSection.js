import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ScrollSection() {
  const headref = useRef(null);
  const sectionref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headref.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
        pin: true,
      },
    });

    tl.to(headref.current, {
      x: -window.innerWidth,
      duration: 5,
    });
    // const pin = gsap.fromTo(
    //   headref.current,
    //   {
    //     translateX: 0,
    //   },
    //   {
    //     translateX: "-100vw",
    //     ease: "none",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: sectionref.current,
    //       start: "top top",
    //       end: "bottom bottom",
    //       scrub: 0.5,
    //       pin: true,
    //     },
    //   }
    // );
    // return () => {
    //   pin.kill();
    // };
  }, []);
  return (
    <>
      <div className="overflow-auto whitespace-no-wrap">
        <div
          ref={headref}
          style={{
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
        >
          <div
            ref={sectionref}
            className="h-[100vh] w-[400vh] flex flex-nowrap relative"
          >
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 1 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 2 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 3 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 4 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 5 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 6 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 7 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 8 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 9 </h3>
            </div>
            <div className="w-[100vh] h-[100vh] flex justify-center items-center border">
              <h3 className="text-black text-[30px] ">Section 10 </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
