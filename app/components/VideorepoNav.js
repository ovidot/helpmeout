import React from "react";
import Image from "next/image";

const VideorepoNav = () => {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <Image
          alt=""
          width={500}
          height={500}
          src="/icon.png"
          id="ICON2"
          className="self-start w-10 shrink-0"
        />
        <div className="font-['Inter'] font-bold text-[#100a42]">HelpMeOut</div>
      </div>
      <div className="flex flex-row justify-between gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M20.0007 36.6834C29.2054 36.6834 36.6673 29.2215 36.6673 20.0168C36.6673 10.812 29.2054 3.3501 20.0007 3.3501C10.7959 3.3501 3.33398 10.812 3.33398 20.0168C3.33398 29.2215 10.7959 36.6834 20.0007 36.6834Z"
            fill="#515151"
          />
          <path
            d="M20 11.5667C16.55 11.5667 13.75 14.3666 13.75 17.8166C13.75 21.2 16.4 23.95 19.9167 24.05C19.9667 24.05 20.0333 24.05 20.0667 24.05C20.1 24.05 20.15 24.05 20.1833 24.05C20.2 24.05 20.2167 24.05 20.2167 24.05C23.5833 23.9333 26.2333 21.2 26.25 17.8166C26.25 14.3666 23.45 11.5667 20 11.5667Z"
            fill="#515151"
          />
          <path
            d="M31.2992 32.2666C28.3326 34.9999 24.3659 36.6832 19.9992 36.6832C15.6326 36.6832 11.6659 34.9999 8.69922 32.2666C9.09922 30.7499 10.1826 29.3666 11.7659 28.2999C16.3159 25.2666 23.7159 25.2666 28.2326 28.2999C29.8326 29.3666 30.8992 30.7499 31.2992 32.2666Z"
            fill="#515151"
          />
        </svg>
        <div className="font-['Work_Sans'] text-[#141414]">John Mark</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
            stroke="black"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default VideorepoNav;
