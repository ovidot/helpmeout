import Image from "next/image";
import React from "react";

const Videocard = () => {
  return (
    <div className="border-solid border-[rgba(182,_179,_198,_0.6)] bg-[rgba(251,_251,_251,_0.5)] flex flex-col gap-6 w-full items-center pt-4 pb-6 px-4 border rounded-[24px]">
      <Image
        alt=""
        width={500}
        height={500}
        id="ICON"
        src="/videoframe.png"
        className=""
      />
      <div className="self-stretch flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2 w-[345px] items-start">
          <div
            id="Title"
            className="text-xl font-['Work_Sans'] font-medium capitalize text-[#141414]"
          >
            How to create Facebook Ad listing
          </div>
          <div
            id="Date1"
            className="font-['Work_Sans'] uppercase text-[#b6b3c6]"
          >
            SEPTEMBER 23, 2023
          </div>
        </div>
        <div className="flex flex-row gap-6 w-16 shrink-0 items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12H16"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
              stroke="#141414"
              stroke-width="1.5"
            />
            <path
              d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
              stroke="#141414"
              stroke-width="1.5"
            />
            <path
              d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
              stroke="#141414"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
