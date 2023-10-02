import React from "react";

const VideoPlayer = ({ filePath }) => {
  console.log(filePath);
  return (
    <div>
      <iframe
        src={filePath}
        width={1000}
        height={500}
        sandbox="allow-scripts allow-modal"
        loading="lazy"
        title="Custom title"
      ></iframe>
      {/* <video controls>
        <source src={filePath} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default VideoPlayer;
