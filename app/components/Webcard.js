import Image from "next/image";
import React from "react";

const Webcard = () => {
  return (
    <div
      id="WEBCARD"
      className="border-solid border-[rgba(182,_179,_198,_0.6)] bg-[rgba(251,_251,_251,_0.5)] self-stretch flex flex-col items-center mb-6 mx-24 pt-4 pb-6 px-4 border rounded-[24px]"
    >
      <Image
        alt=""
        width={1240}
        height={498}
        src="/videoframee.png"
        className=""
      />
    </div>
  );
};

export default Webcard;
