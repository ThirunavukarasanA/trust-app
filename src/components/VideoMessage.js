import React from "react";

export default function VideoMessage({ isActive }) {
  console.log(isActive);
  return (
    <div id="last">
      <div className="w-[150px] h-[150px] bg-green"></div>
    </div>
  );
}
