"use client";

import React from "react";
import Hand from "@/components/media/Hand";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

const Main = () => {
  // const main = React.useRef();
  
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    // setWidth(window.innerWidth);

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div
        className={`flex flex-col w-screen items-center justify-center -translate-y-[320px] md:-translate-y-[311px] z-20 fixed`}
        onAnimationEnd={(event) => {
          event.currentTarget.classList.add("hidden");
          event.currentTarget.classList.remove("overflow-hidden");

          // window.scrollTo(0, 30);
        }}
        onClick={(event) => {
          event.currentTarget.classList.add("animate-screen");
          document.getElementById("home")?.classList.remove("hidden");
        }}

        id="main"
      >
        <div className="">
          <Hand />
        </div>
        <Landing />
      </div>
      <div className="hidden" id="home">
        <Navbar />
        <div className="h-screen w-screen bg-red-400"></div>
      </div>
    </div>
    // <div></div>
  );
};

export default Main;
