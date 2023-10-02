import React from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="p-3">
        <div
          id="YourRecordingIsReadyRoot"
          className="overflow-hidden bg-white flex flex-col gap-2 w-full rounded-lg"
        >
          <div className="flex flex-row gap-10 items-start mb-12 mx-24">
            <div className="flex flex-col gap-2 w-2/5 h-[610px] items-start mt-px mr-8">
              <div className="text-5xl font-['Sora'] font-bold text-[#141414] mb-8">
                Your video is ready!
              </div>
              <div className="font-['Sora'] font-medium text-[#727272]">
                Name
              </div>
              <div className="self-stretch flex flex-row gap-6 items-center mb-12 mr-40">
                <div
                  id="UntitledVideo"
                  className="text-2xl font-['Sora'] font-semibold text-[#413c6d]"
                >
                  Untitled_Video_20232509{" "}
                </div>
                <img
                  src="https://file.rendit.io/n/lWgviOhkVUL7BvZ94BD8.svg"
                  id="Vuesaxlinearedit"
                  className="self-start w-8 shrink-0"
                />
              </div>
              <div className="border-solid border-[#e7e7ed] bg-[rgba(182,_179,_198,_0.2)] self-stretch flex flex-row justify-between mb-12 h-16 shrink-0 items-center px-6 border-0 rounded-lg">
                <div
                  id="Text1"
                  className="text-lg font-['Work_Sans'] text-[rgba(67,_67,_67,_0.8)]"
                >
                  enter email of receiver
                </div>
                <button
                  id="Button1"
                  className="overflow-hidden bg-[#605c84] flex flex-col justify-center w-20 shrink-0 h-10 items-center rounded-lg"
                >
                  <div
                    id="Text2"
                    className="font-['Manrope'] font-medium leading-[24px] text-white"
                  >
                    Send
                  </div>
                </button>
              </div>
              <div className="text-xl font-['Sora'] font-semibold text-[#141414] mb-2">
                Video Url
              </div>
              <div className="border-solid border-[#929292] bg-[#fafafa] self-stretch flex flex-row justify-center mb-12 gap-8 h-16 shrink-0 items-center border-0 rounded-lg">
                <div
                  id="Text3"
                  className="font-['Work_Sans'] leading-[25.8px] text-[#4b4b4b]"
                >
                  https://www.helpmeout/Untitled_Video_20232509
                </div>
                <button
                  id="Button2"
                  className="border-solid border-[#120b48] overflow-hidden flex flex-row justify-center gap-2 h-10 items-center px-4 py-2 border rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M4.66699 12.4998H3.83366C3.39163 12.4998 2.96771 12.3242 2.65515 12.0117C2.34259 11.6991 2.16699 11.2752 2.16699 10.8332V3.33317C2.16699 2.89114 2.34259 2.46722 2.65515 2.15466C2.96771 1.8421 3.39163 1.6665 3.83366 1.6665H11.3337C11.7757 1.6665 12.1996 1.8421 12.5122 2.15466C12.8247 2.46722 13.0003 2.89114 13.0003 3.33317V4.1665M9.66699 7.49984H17.167C18.0875 7.49984 18.8337 8.24603 18.8337 9.1665V16.6665C18.8337 17.587 18.0875 18.3332 17.167 18.3332H9.66699C8.74652 18.3332 8.00033 17.587 8.00033 16.6665V9.1665C8.00033 8.24603 8.74652 7.49984 9.66699 7.49984Z"
                      stroke="#120B48"
                      stroke-width="1.67"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div
                    id="Text4"
                    className="font-['Manrope'] font-medium leading-[24px] text-[#120b48]"
                  >
                    Copy
                  </div>
                </button>
              </div>
              <div
                id="ShareYourVideo"
                className="font-['Sora'] font-semibold text-[#08051e] mb-1"
              >
                Share your video{" "}
              </div>
              <div className="self-stretch flex flex-row justify-between mr-24 items-start gap-2">
                <div className="border-solid border-[#0a0628] flex flex-row justify-center gap-2 h-12 items-center px-4 py-3 border rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_577_919)">
                      <path
                        d="M24.5 11.9993C24.5 5.37187 19.1274 -0.000705719 12.5 -0.000705719C5.87258 -0.000705719 0.5 5.37187 0.5 11.9993C0.5 17.9888 4.88823 22.9533 10.625 23.8535V15.468H7.57813V11.9993H10.625V9.35554C10.625 6.34805 12.4165 4.68679 15.1576 4.68679C16.4705 4.68679 17.8438 4.92117 17.8438 4.92117V7.87429H16.3306C14.8399 7.87429 14.375 8.7993 14.375 9.74829V11.9993H17.7031L17.1711 15.468H14.375V23.8535C20.1118 22.9533 24.5 17.9888 24.5 11.9993Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M17.1711 15.4688L17.7031 12H14.375V9.74899C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2359 23.9501 11.8621 24 12.5 24C13.1379 24 13.7641 23.9501 14.375 23.8542V15.4688H17.1711Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_919">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="font-['Inter'] font-medium tracking-[0.16] leading-[24px] text-[#08051e]">
                    Facebook
                  </div>
                </div>
                <div className="border-solid border-[#0a0628] flex flex-row justify-center gap-2 h-12 items-center px-4 py-3 border rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5859 3.87197C15.7061 1.98972 13.2059 0.952615 10.542 0.95166C5.05283 0.95166 0.58547 5.41855 0.58356 10.9092C0.582605 12.6644 1.04147 14.3776 1.91288 15.8874L0.5 21.0481L5.77909 19.6634C7.2335 20.457 8.87128 20.8748 10.5377 20.8753H10.542C16.0302 20.8753 20.4981 16.4079 20.5 10.9173C20.5009 8.25627 19.4662 5.7547 17.5859 3.87244V3.87197ZM10.542 19.1935H10.5387C9.05367 19.1931 7.59689 18.7939 6.32583 18.0399L6.02357 17.8604L2.89078 18.6822L3.72686 15.6277L3.53013 15.3144C2.70169 13.9966 2.26383 12.4734 2.26479 10.9097C2.2667 6.3463 5.97963 2.63337 10.5454 2.63337C12.7561 2.63432 14.8342 3.49619 16.3969 5.06091C17.9598 6.62516 18.8197 8.7051 18.8188 10.9163C18.8168 15.4802 15.1039 19.1931 10.542 19.1931V19.1935ZM15.0819 12.9948C14.8332 12.8702 13.6099 12.2685 13.3816 12.1855C13.1534 12.1024 12.9877 12.0609 12.822 12.3101C12.6563 12.5594 12.1793 13.1199 12.0342 13.2856C11.889 13.4518 11.7438 13.4723 11.4951 13.3477C11.2463 13.223 10.4446 12.9604 9.49395 12.1129C8.75433 11.453 8.25483 10.6384 8.10972 10.3892C7.96456 10.1399 8.09444 10.0053 8.21856 9.8816C8.33028 9.76988 8.46733 9.59083 8.59194 9.44566C8.71661 9.30049 8.75767 9.19644 8.84072 9.03071C8.92383 8.86455 8.88228 8.71944 8.82022 8.59477C8.75811 8.47016 8.26061 7.24538 8.05289 6.74738C7.85089 6.26227 7.64561 6.32816 7.49328 6.32004C7.34811 6.31288 7.18244 6.31145 7.01628 6.31145C6.85011 6.31145 6.58078 6.37352 6.35256 6.62277C6.12433 6.87199 5.48162 7.4741 5.48162 8.69838C5.48162 9.92266 6.37311 11.1064 6.49772 11.2725C6.62233 11.4387 8.25244 13.9517 10.7483 15.0299C11.3418 15.2863 11.8054 15.4395 12.1669 15.5542C12.7628 15.7437 13.3052 15.717 13.734 15.653C14.212 15.5814 15.2061 15.0509 15.4133 14.4698C15.6206 13.8887 15.6206 13.3902 15.5585 13.2865C15.4964 13.1829 15.3303 13.1204 15.0815 12.9958L15.0819 12.9948Z"
                      fill="#25D366"
                    />
                  </svg>
                  <div className="font-['Inter'] font-medium tracking-[0.16] leading-[24px] text-[#08051e]">
                    WhatsApp
                  </div>
                </div>
                <div className="border-solid border-[#0a0628] flex flex-row justify-center gap-2 h-12 items-center px-4 py-3 border rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20Z"
                      fill="url(#paint0_linear_577_929)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.0173 9.89096C7.93008 8.6137 9.87712 7.78815 10.8584 7.38317C13.631 6.23052 14.2073 6.02803 14.5812 6.01245C14.659 6.01245 14.846 6.02803 14.9706 6.12149C15.064 6.19937 15.0952 6.3084 15.1108 6.38628C15.1263 6.46416 15.1419 6.6355 15.1263 6.77569C14.9706 8.3489 14.3319 12.1963 13.9893 13.9564C13.8491 14.704 13.5687 14.9533 13.3039 14.9844C12.7276 15.0311 12.2759 14.595 11.7151 14.2368C10.8428 13.6604 10.3444 13.3022 9.48771 12.7414C8.5064 12.0872 9.14503 11.729 9.70578 11.1526C9.84596 10.9969 12.4161 8.676 12.4628 8.45793C12.4628 8.42678 12.4784 8.33332 12.4161 8.2866C12.3538 8.23987 12.2759 8.25544 12.2136 8.27102C12.1201 8.28659 10.7182 9.22117 7.99238 11.0592C7.5874 11.3396 7.22914 11.4642 6.90204 11.4642C6.54378 11.4642 5.85842 11.2617 5.34441 11.0903C4.72135 10.8878 4.22291 10.7788 4.26964 10.4361C4.30079 10.2648 4.55001 10.0779 5.0173 9.89096Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_577_929"
                        x1="0.5"
                        y1="9.99276"
                        x2="20.4855"
                        y2="9.99276"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2AABEE" />
                        <stop offset="1" stop-color="#229ED9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="font-['Inter'] font-medium tracking-[0.16] leading-[24px] text-[#08051e]">
                    Telegram
                  </div>
                </div>
              </div>
            </div>
            <div
              id="Divider"
              className="border-solid border-[#bbbbbb] mt-px w-px shrink-0 h-[930px] border-r border-l-0 border-y-0"
            />
            <div className="flex flex-col gap-4 w-1/2 items-start">
              <img
                src="https://file.rendit.io/n/YJvsKaRpRLLz20vVdi2y.png"
                id="Video"
                className="mb-16"
              />
              <div className="text-2xl font-['Sora'] font-semibold ml-px">
                Transcript
              </div>
              <div
                id="Language"
                className="border-solid border-[#cfcfcf] flex flex-row gap-20 h-8 shrink-0 items-center mb-6 ml-px p-2 border rounded"
              >
                <div className="font-['Work_Sans'] text-[#9d9d9d]">English</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M13.7797 6.46655L9.43306 10.8132C8.91973 11.3266 8.07973 11.3266 7.56639 10.8132L3.21973 6.46655"
                    stroke="#BBBBBB"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="self-stretch relative flex flex-row gap-6 items-start mx-px">
                <div className="w-[575px] h-12 absolute top-0 left-0 flex flex-row gap-6 items-start">
                  <div className="font-['Work_Sans'] leading-[24.2px] text-[#141414] mt-1">
                    0.01
                  </div>
                  <div className="font-['Inter'] font-medium leading-[26.1px] w-5/6">
                    First step. Open Facebook on your desktop or mobile device
                    and locate Marketplace in the left-hand menu or at the top
                    of the{" "}
                  </div>
                </div>
                <div className="w-[575px] h-12 absolute top-16 left-0 flex flex-row gap-6 items-start">
                  <div className="font-['Work_Sans'] leading-[24.2px] text-[#141414] mt-1">
                    0.15
                  </div>
                  <div className="font-['Inter'] font-medium leading-[26.1px] w-5/6">
                    First step. Open Facebook on your desktop or mobile device
                    and locate Marketplace in the left-hand menu or at the top
                    of the{" "}
                  </div>
                </div>
                <div className="w-[575px] h-12 absolute top-32 left-0 flex flex-row gap-5 items-start">
                  <div className="font-['Work_Sans'] leading-[24.2px] text-[#141414] mt-1">
                    0.30
                  </div>
                  <div className="font-['Inter'] font-medium leading-[26.1px] w-5/6">
                    First step. Open Facebook on your desktop or mobile device
                    and locate Marketplace in the left-hand menu or at the top
                    of the{" "}
                  </div>
                </div>
                <div className="font-['Work_Sans'] leading-[24.2px] text-[#cfcfcf] self-end relative mb-6">
                  1.00
                </div>
                <div className="relative flex flex-col w-[521px] items-end px-1">
                  <div className="font-['Inter'] font-medium leading-[26.1px] text-[#cfcfcf] absolute top-[204px] left-0 h-12 w-full">
                    First step. Open Facebook on your desktop or mobile device
                    and locate Marketplace in the left-hand menu or at the top
                    of the{" "}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="256"
                    viewBox="0 0 7 256"
                    fill="none"
                  >
                    <rect
                      x="1.5"
                      width="4"
                      height="256"
                      rx="2"
                      fill="#F5F5F5"
                    />
                    <rect
                      x="0.5"
                      width="6"
                      height="181"
                      rx="3"
                      fill="#D9D9D9"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            id="SaveToAccountBanner"
            className="overflow-hidden bg-[rgba(231,_231,_237,_0.2)] flex flex-col justify-center mb-12  gap-10 h-[317px] shrink-0 items-center"
          >
            <div className="text-center text-2xl font-['Sora'] font-semibold text-[#141414] w-3/5">
              To ensure the availability and privacy of your video, we recommend
              saving it to your account.
            </div>
            <div className="bg-[#120b48] flex flex-col justify-center h-12 shrink-0 items-center rounded-lg">
              <div className="text-center font-['Work_Sans'] font-medium text-[#f9f9ff] mx-8">
                Save Video
              </div>
            </div>
            <div className="text-center text-2xl font-['Sora'] font-semibold text-[#7e7e7e]">
              Dont have an account?{" "}
              <div className="underline text-[#120b48] contents">
                Create account
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
