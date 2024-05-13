import React from "react";
import "../Assets/css/style.css";
export default function GlobeAnimation() {
  return (
    <div className="">
      <div className="">
        <div className="sticky top-0">
          <ul className="flex border justify-center glassbg">
            <a href="#globe">
              <li className="bg-black text-white text-h4 py-2 px-5 rounded-full">
                Globe Animation
              </li>
            </a>
            <a href="#pic">
              <li className="bg-backg py-2 px-5 text-h4 rounded-full">
                Picture
              </li>
            </a>
            <a href="#last">
              <li className="bg-backg py-2 px-5 text-h4 rounded-full">Last</li>
            </a>
          </ul>
        </div>
        <div className="bg-backg py-10">
          <div
            id="globe"
            className="w-[150px] h-[150px] mb-5 bg-ggreen my-20"
          ></div>
          <div
            id="pic"
            className="w-[150px] h-[150px] mb-5 bg-black my-20"
          ></div>
          <div
            id="last"
            className="w-[150px] h-[150px] mb-5 bg-green my-20"
          ></div>
        </div>
      </div>
    </div>
  );
}
