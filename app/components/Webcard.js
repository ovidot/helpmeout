"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const Webcard = () => {
  return (
    <div
      id="WEBCARD"
      className="border-solid border-[rgba(182,_179,_198,_0.6)] bg-[rgba(251,_251,_251,_0.5)] self-stretch flex flex-col items-center mb-6 mx-24 pt-4 pb-6 px-4 border rounded-[24px]"
    >
      <VideoPlayer filePath="/Download.mp4" />
    </div>
  );
};

export default Webcard;
