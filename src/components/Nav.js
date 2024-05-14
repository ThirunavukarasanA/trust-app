import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="">
        <ul className="flex border justify-center glassbg">
          <a href="#globe" className="">
            <li className="text-h4 py-2 px-5 rounded-full">Globe Animation</li>
          </a>
          <a href="#photo" className="">
            <li className="py-2 px-5 text-h4 rounded-full">Picture</li>
          </a>
          <a href="#last" className="">
            <li className="py-2 px-5 text-h4 rounded-full">Last</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
