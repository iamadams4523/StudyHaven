'use client';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdDownload } from 'react-icons/md';

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="h-[15%] flex flex-col justify-around items-center mb-2">
        <h1 className="ml-[1.5rem] mt-[1.1rem] md:ml-[4.5rem] font-[poppins] text-[20px] font-semibold leading-[30px] self-start">
          My Classroom
        </h1>
        <div className="w-[90%] mx-auto rounded-full h-[40px] gap-2 bg-gray flex items-center">
          <FiSearch className="text-[20px] text-lightpurple ml-2" />
          <p className="font-[poppins] text-[16px] font-normal">Search</p>
        </div>
      </div>
      <div className="h-[15%] w-full bg-lightpurple flex justify-between items-center rounded-bl-[35px] rounded-br-[35px] px-4">
        <div className="flex flex-col h-full gap-3 mt-3 md:ml-[3.5rem]">
          <h1 className="font-poppins text-[20px] font-semibold leading-[30px] text-white">
            100 LEVEL
          </h1>
          <p className="font-poppins text-[15px] font-medium leading-[22.5px] text-white">
            100 | Biochemistry | SLS
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/caffeine-148821_1280-removebg-preview 2.png"
            alt="chemistry logo"
            width={50}
            height={50}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[70%] mt-3 flex flex-col items-center justify-center gap-y-3">
        <div className="w-full mx-auto min-h-[150px] flex flex-col items-center p-2 gap-4">
          <div className="w-full min-h-[80px] outline outline-1 outline-gray rounded-lg flex items-center justify-end mx-auto p-1">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="chemistry logo"
              width={50}
              height={50}
              className="w-[10rem] h-auto"
            />
          </div>
          <div className="w-[100%] flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="font-[Poppins] text-[30px] font-semibold">
                CHM 101 (a)
              </p>
              <p className="font-[Poppins] text-[15px] font-normal">
                Organic Chemistry
              </p>
              <Image
                src="/Rectangle 156.png"
                alt="range"
                width={50}
                height={50}
                className="w-[10rem]"
              />
            </div>
            <MdDownload className="w-[4rem] text-[3rem] text-lightpurple" />
          </div>
        </div>
        <div className="w-full mx-auto min-h-[150px] flex flex-col items-center p-2 gap-4">
          <div className="w-full min-h-[80px] outline outline-1 outline-gray rounded-lg flex items-center justify-end mx-auto p-1">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="chemistry logo"
              width={50}
              height={50}
              className="w-[10rem] h-auto"
            />
          </div>
          <div className="w-[100%] flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="font-[Poppins] text-[30px] font-semibold">
                CHM 101 (a)
              </p>
              <p className="font-[Poppins] text-[15px] font-normal">
                Organic Chemistry
              </p>
              <Image
                src="/Rectangle 156.png"
                alt="range"
                width={50}
                height={50}
                className="w-[10rem]"
              />
            </div>
            <MdDownload className="w-[4rem] text-[3rem] text-lightpurple" />
          </div>
        </div>
        <div className="w-full mx-auto min-h-[150px] flex flex-col items-center p-2 gap-4">
          <div className="w-full min-h-[80px] outline outline-1 outline-gray rounded-lg flex items-center justify-end mx-auto p-1">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="chemistry logo"
              width={50}
              height={50}
              className="w-[10rem] h-auto"
            />
          </div>
          <div className="w-[100%] flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="font-[Poppins] text-[30px] font-semibold">
                CHM 101 (a)
              </p>
              <p className="font-[Poppins] text-[15px] font-normal">
                Organic Chemistry
              </p>
              <Image
                src="/Rectangle 156.png"
                alt="range"
                width={50}
                height={50}
                className="w-[10rem]"
              />
            </div>
            <MdDownload className="w-[4rem] text-[3rem] text-lightpurple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
