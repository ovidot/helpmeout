import React from "react";
import Image from "next/image";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="bg-white flex flex-row gap-2 w-full h-10 items-center px-auto">
      <Image
        alt=""
        src="/icon.png"
        id="ICON"
        className="w-10 shrink-0"
        width={20}
        height={30}
      />
      <div className="font-['Inter'] font-bold text-[#100a42] mr-[373px]">
        HelpMeOut
      </div>
      <div className="flex flex-row justify-center gap-10 w-full h-10 items-center ">
        <div className="font-['Work_Sans'] font-medium ">Features</div>
        <div className="font-['Work_Sans'] font-medium">How It Works</div>
      </div>
      <div className="flex flex-col justify-center w-full items-center rounded">
        <div className="text-center text-lg font-['Sora'] font-semibold text-[#120b48]">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Navbar;
