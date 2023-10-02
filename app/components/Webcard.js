"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const Webcard = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    // Fetch video path from Flask API
    fetch("https://hngx-video-chrome-extension.onrender.com/get_video/1") // Assuming video_id is 1
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status:${response.status}`);
        }
        //convert response to blob
        console.log(response);
        return response.blob();
      })
      .then((blob) => {
        //create url for the blob
        const videoUrl = URL.createObjectURL(blob);
        setVideoUrl(videoUrl);
      })
      .catch((error) => console.error("Error fetching video path:", error));
  }, []);

  return (
    <div
      id="WEBCARD"
      className="border-solid border-[rgba(182,_179,_198,_0.6)] bg-[rgba(251,_251,_251,_0.5)] self-stretch flex flex-col items-center mb-6 mx-24 pt-4 pb-6 px-4 border rounded-[24px]"
    >
      {videoUrl ? (
        <VideoPlayer filePath={videoUrl} />
      ) : (
        <VideoPlayer filePath={videoUrl} />
      )}
    </div>
  );
};

export default Webcard;
