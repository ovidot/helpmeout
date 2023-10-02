"use client";
import React from "react";
import "./hero.css";
import Image from "next/image";

const Hero = () => {
  const TextButtonRootFunction = () => {
    asdf;
  };
  return (
    <div className="w-screen h-full flex items-center justify-between px-20 lg:max-w-[1440px] lg:h-[777px] text-black shrink-0 bg-[#FFF]">
      <div className="w-[548px] h-[317px]">
        {" "}
        <div className="self-stretch flex flex-col gap-5 items-start">
          <div
            id="ShowThemDontJustTell"
            className="text-6xl font-['Sora'] font-bold leading-[64px] text-[#141414]"
          >
            Show Them
            <br />
            Don’t Just Tell
          </div>
          <div className="text-xl font-['Inter'] leading-[28px] text-black/75 w-full">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </div>
        </div>
        <div className="bg-[#120b48] mt-5 flex flex-row justify-center gap-3 w-2/5 h-16 shrink-0 items-center rounded-lg">
          <div className="text-center text-lg font-['Work_Sans'] font-medium text-white">
            Install HelpMeOut
          </div>
          <div className="w-5 shrink-0">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.91699 10.5H16.942"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <section className="flex">
          <div className="flex flex-col gap-5 z-20">
            <Image
              alt=""
              width={4096}
              height={2731}
              src="/img1.png"
              id="ICON2"
              className="self-start w-[374px] h-[221px] shrink-0 rounded-xl contain"
            />
            <Image
              alt=""
              width={4096}
              height={2731}
              src="/img2.png"
              id="ICON2"
              className="self-start w-[374px] h-[218px] shrink-0 z-0 rounded-xl contain"
            />
          </div>
          <div className="ms-5 z-20">
            <Image
              alt=""
              width={4096}
              height={2731}
              src="/img3.png"
              id="ICON2"
              className="self-start w-[305px] h-[448px] shrink-0  rounded-xl"
            />
          </div>
        </section>
        <div className="dotted-blue w-min"></div>
        <div className="dotted-grey w-min -z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
