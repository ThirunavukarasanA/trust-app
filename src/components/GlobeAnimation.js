import React from "react";
import "../Assets/css/style.css";
export default function GlobeAnimation() {
  return (
    <section id="globe" className="h-[100vh]">
      <div className="">
        <div className="">
          <iframe
            src="https://www.pictramap.com/app/view?p=b204cc&paused=1"
            // style={{ minHeight: "600px", minWidth: "740px" }}
            className="lg:h-[640px] lg:w-[100%] md:w-[100%] md:h-[100%] mdsm:w-[100%] mdsm:h-[450px] sm:w-[100%] sm:h-[700px]"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
