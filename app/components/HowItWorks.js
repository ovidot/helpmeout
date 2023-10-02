import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="overflow-hidden bg-white flex flex-col gap-4 w-full h-[897px] pt-24 pb-32 px-24">
      <div className="text-4xl font-['Sora'] font-bold text-[#141414] self-center mb-10">
        How it works
      </div>
      <div className="flex  gap-5">
        <div className="flex flex-col gap-8 w-full items-center">
          <div
            id="Icon"
            className="bg-[#120b48] flex flex-col justify-center w-16 h-16 shrink-0 items-center rounded-[60px]"
          >
            <div className="text-center text-3xl font-['Inter'] font-bold text-white">
              1
            </div>
          </div>
          <div className="self-stretch flex flex-col gap-4 items-center">
            <div className="text-center text-3xl font-['Inter'] font-semibold text-[#1b233d]">
              Record Screen
            </div>
            <div className="text-center text-xl font-['Work_Sans'] h-32 leading-[30.3px] text-[#616163] self-start w-full">
              Click the &quot;Start Recording&quot; button in our extension.
              {"  "}
              choose which part of your screen to capture and who you want to
              send it to.
            </div>

            <Image
              width={1000}
              height={1000}
              src="vector.svg"
              alt="My vector SVG"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <div
            id="Icon"
            className="bg-[#120b48] flex flex-col justify-center w-16 h-16 shrink-0 items-center rounded-[60px]"
          >
            <div className="text-center text-3xl font-['Inter'] font-bold text-white">
              2
            </div>
          </div>
          <div className="self-stretch flex flex-col gap-4 items-center">
            <div className="text-center text-3xl font-['Inter'] font-semibold text-[#1b233d]">
              Share Your Recording
            </div>
            <div className="text-center text-xl font-['Work_Sans'] h-32 leading-[30.3px] text-[#616163] self-start w-full">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </div>
            <Image
              width={1000}
              height={1000}
              src="vector.svg"
              alt="My vector SVG"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <div
            id="Icon"
            className="bg-[#120b48] flex flex-col justify-center w-16 h-16 shrink-0 items-center rounded-[60px]"
          >
            <div className="text-center text-3xl font-['Inter'] font-bold text-white">
              3
            </div>
          </div>
          <div className="self-stretch flex flex-col gap-4 items-center">
            <div className="text-center text-3xl font-['Inter'] font-semibold text-[#1b233d]">
              Learn Effortlessly
            </div>
            <div className="text-center text-xl font-['Work_Sans'] h-32 leading-[30.3px] text-[#616163] self-start w-full">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </div>
            <Image
              width={1000}
              height={1000}
              src="vector.svg"
              alt="My vector SVG"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
