import Image from "next/image";
import React from "react";
import "./vrepo.css";
import Videocard from "../components/Videocard";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-5  ">
      <div
        id="NavRoot"
        className="flex flex-row justify-between w-full  items-center px-24"
      >
        <Link href={`/`}>
          <div className="flex flex-row gap-2 items-center my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_593_1789)">
                <path
                  d="M31.145 16.8427C30.5853 14.9128 29.567 13.147 28.177 11.6959C26.787 10.2448 25.0666 9.15153 23.1625 8.50937C21.2814 7.96182 19.3042 7.82727 17.3663 8.11493C15.4283 8.4026 13.5754 9.10568 11.9345 10.176C11.7995 10.3113 11.6301 10.4073 11.4447 10.4537C11.2592 10.5001 11.0647 10.495 10.8818 10.4392C10.5133 10.3198 10.1812 10.1085 9.91693 9.82516C9.72455 9.47805 9.66234 9.07369 9.7415 8.6848C9.79175 8.49815 9.88003 8.32388 10.0008 8.17294C10.1215 8.02199 10.2722 7.89762 10.4433 7.80761C15.0924 5.08831 19.6538 4.38656 24.0397 5.79007C26.199 6.50829 28.1704 7.70025 29.8096 9.27872C31.4488 10.8572 32.7143 12.7822 33.5134 14.9129H39.3906C38.1889 10.1725 35.292 6.03671 31.2476 3.28744C27.2032 0.538175 22.2917 -0.634016 17.4417 -0.00750837C12.5916 0.619 8.13922 3.00078 4.92624 6.68753C1.71325 10.3743 -0.0376241 15.1104 0.00465442 20.0006C0.00465442 20.7901 0.0923737 21.4918 0.0923737 22.2813H7.54851C7.83327 22.2651 8.11557 22.342 8.35289 22.5002C8.59021 22.6584 8.76969 22.8894 8.8643 23.1585C9.43723 25.0817 10.4601 26.8408 11.8483 28.29C13.2365 29.7392 14.9499 30.8367 16.8468 31.4918C18.7279 32.0394 20.7051 32.1739 22.643 31.8863C24.581 31.5986 26.4339 30.8955 28.0748 29.8252C28.2099 29.6898 28.3792 29.5939 28.5646 29.5475C28.7501 29.5011 28.9446 29.5062 29.1275 29.562C29.496 29.6814 29.8281 29.8927 30.0924 30.176C30.2848 30.5231 30.347 30.9275 30.2678 31.3164C30.2176 31.503 30.1293 31.6773 30.0085 31.8283C29.8878 31.9792 29.7371 32.1036 29.5661 32.1936C26.9219 33.9728 23.8057 34.9198 20.6187 34.9129C19.0435 34.901 17.4781 34.6647 15.9696 34.2111C13.8012 33.51 11.8211 32.3241 10.1796 30.7434C8.53803 29.1627 7.27826 27.2287 6.49588 25.0883H0.706409C1.97453 29.7507 4.88766 33.7964 8.90731 36.4776C12.927 39.1588 17.7814 40.2941 22.5732 39.6737C27.365 39.0534 31.7702 36.7192 34.9745 33.1028C38.1789 29.4864 39.9657 24.8322 40.0047 20.0006C40.021 19.2685 39.9917 18.5361 39.9169 17.8076H32.5485C32.2494 17.7878 31.9612 17.6878 31.7142 17.518C31.4672 17.3482 31.2706 17.1149 31.145 16.8427Z"
                  fill="#100A42"
                />
                <path
                  d="M20.088 28.7501C21.8149 28.7335 23.4983 28.2062 24.9261 27.2347C26.354 26.2632 27.4624 24.8909 28.1117 23.2907C28.7611 21.6904 28.9225 19.9338 28.5754 18.2421C28.2283 16.5503 27.3884 14.9991 26.1614 13.7838C24.9344 12.5685 23.3752 11.7434 21.6802 11.4126C19.9852 11.0817 18.2302 11.2598 16.6363 11.9245C15.0423 12.5892 13.6807 13.7107 12.7229 15.1477C11.7651 16.5848 11.254 18.2731 11.2539 20.0001C11.2539 21.1563 11.4829 22.301 11.9279 23.3681C12.3729 24.4352 13.025 25.4036 13.8464 26.2172C14.6678 27.0308 15.6424 27.6736 16.7137 28.1083C17.785 28.5431 18.9319 28.7612 20.088 28.7501Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_593_1789">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="font-['Inter'] text-sm font-bold text-[#100a42]">
              HelpMeOut
            </div>
          </div>
        </Link>

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
      </div>
      {/* Top Content */}
      <div className="nameit mx-auto mb-3 mt-5">
        <div className="flex flex-col items-start justify-between gap-2">
          <div className="text-[#141414] text-3xl font-extrabold">
            Hello, John Mark
          </div>
          <div className="text-[#141414B2] text-lg">
            Here are your recorded videos
          </div>
        </div>
        <div className="searchbar_div ">
          <div className="searchbar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M9.58268 18.0001C13.9549 18.0001 17.4993 14.4557 17.4993 10.0834C17.4993 5.71116 13.9549 2.16675 9.58268 2.16675C5.21043 2.16675 1.66602 5.71116 1.66602 10.0834C1.66602 14.4557 5.21043 18.0001 9.58268 18.0001Z"
                stroke="#C3C3C3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.3327 18.8334L16.666 17.1667"
                stroke="#C3C3C3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="input_text">Search for a particular video</span>
          </div>
        </div>
      </div>
      <hr />
      {/* Recent Videos */}
      <div className="Recent_vids mt-5 mx-auto">
        <span className="timeline">Recent files</span>
        <div className="videos w-full flex mt-2 ">
          <Link href={`/Videorepo/2`}>
            <Videocard />
          </Link>
          <Link href={`/Videorepo/2`}>
            <Videocard />
          </Link>
        </div>
        <div
          id="RecentVideosRoot"
          className="flex flex-col gap-6 w-full items-start"
        >
          <span className="timeline">files from last week</span>
          <div className="videos w-full flex mt-2 ">
            <Link href={`/Videorepo/2`}>
              <Videocard />
            </Link>{" "}
            <Link href={`/Videorepo/2`}>
              <Videocard />
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
