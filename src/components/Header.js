import React, { useRef, useState } from "react";
// import Alien from "../Assets/videos/Episode 1 mygirlfriendisanalien.mp4";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import HeaderVideo from "../Assets/videos/trutee lanscap.mov";
import TabHeaderVideo from "../Assets/videos/mobbhead.mp4";
import MobHeader from "../Assets/videos/mobhead2.mp4";
export default function Header() {
  const videoRef = useRef(null);
  const mobref = useRef(null);
  const tabref = useRef(null);
  const [muted, setMuted] = useState(true);
  const [mobmute, setMobmute] = useState(true);
  const [tabmute, setTabmute] = useState();
  const toggleMute = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.muted = !videoElement.muted;
      setMuted(!muted);
      // setMobmute(!mobmute);
    }
  };
  const MobtoggleMute = () => {
    if (mobref.current) {
      const videoElement = mobref.current;
      videoElement.muted = !videoElement.muted;
      setMobmute(!mobmute);
    }
  };
  const TabtoggleMute = () => {
    if (tabref.current) {
      const videoElement = tabref.current;
      videoElement.muted = !videoElement.muted;
      setTabmute(!tabmute);
    }
  };
  return (
    <div className="">
      <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden relative lg:-mt-16 lge:-mt-16">
        <video ref={videoRef} autoPlay muted playsInline >
          <source src={HeaderVideo} type="video/mp4" />
        </video>
        <div className="absolute top-24 right-10 ">
          <button
            onClick={() => {
              toggleMute();
            }}
            className="p-3 rounded-full bg-grey"
          >
            {muted ? (
              <IoMdVolumeOff className="text-h5 text-white" />
            ) : (
              <IoMdVolumeHigh className="text-h5 text-white" />
            )}
          </button>
        </div>
      </div>

      <div className="lg:hidden lge:hidden md:block mdsm:block sm:hidden relative md:-my-20">
        <video ref={tabref} autoPlay muted playsInline loop>
          <source src={TabHeaderVideo} />
        </video>
        <div className="absolute top-24 right-10 ">
          <button
            onClick={() => {
              TabtoggleMute();
            }}
            className="p-3 rounded-full bg-grey"
          >
            {tabmute ? (
              <IoMdVolumeOff className="text-h5 text-white" />
            ) : (
              <IoMdVolumeHigh className="text-h5 text-white" />
            )}
          </button>
        </div>
      </div>

      <div className="lg:hidden lge:hidden md:hidden mdsm:block sm:block relative">
        <video ref={mobref} autoPlay muted playsInline loop>
          <source src={MobHeader} />
        </video>
        <div className="absolute top-5 right-10 ">
          <button
            onClick={() => {
              MobtoggleMute();
            }}
            className="p-3 rounded-full bg-grey"
          >
            {mobmute ? (
              <IoMdVolumeOff className="text-h5 text-white" />
            ) : (
              <IoMdVolumeHigh className="text-h5 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
