import Image from "next/image";
import React from "react";
import "./vrepo.css";
import Videocard from "../components/Videocard";
import VideorepoNav from "../components/videorepoNav";

const page = () => {
  return (
    <div className="p-5">
      <VideorepoNav />
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
          <Videocard />
          <Videocard />
        </div>
        <div
          id="RecentVideosRoot"
          className="flex flex-col gap-6 w-full items-start"
        >
          <span className="timeline">files from last week</span>
          <div className="videos w-full flex mt-2 ">
            <Videocard />
            <Videocard />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
