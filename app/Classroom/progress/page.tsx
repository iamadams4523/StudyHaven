'use client';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

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
            Biochemistry Department
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="self-end font-[Rockwell Extra Bold] text-white text-[70px] font-extrabold">
            1
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[70%] mt-3 flex flex-col items-center gap-7 mb-2">
        <div className="w-full mx-auto h-[150px] flex items-center p-2 gap-4 ">
          <div className="w-[50%] h-[80%] outline outline-1 outline-black rounded-lg flex items-center justify-center">
            <Image
              src="/caffeine-148821_1280-removebg-preview 2.png"
              alt="chemistry logo"
              width={50}
              height={50}
              className="w-full h-full"
            />
          </div>

          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              0% Completed
            </p>
            <p className="font-[Poppins] text-[30px] font-semibold self-end text-lightpurple">
              CHM 101
            </p>
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              Organic Chemistry
            </p>
            <div className="bg-lightpurple w-[50%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto h-[150px] flex items-center p-2 gap-4 ">
          <div className="w-[50%] h-[80%] outline outline-1 outline-black rounded-lg flex items-center justify-center">
            <Image
              src="/caffeine-148821_1280-removebg-preview 2.png"
              alt="chemistry logo"
              width={50}
              height={50}
              className="w-full h-full"
            />
          </div>

          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              0% Completed
            </p>
            <p className="font-[Poppins] text-[30px] font-semibold self-end text-lightpurple">
              CHM 101
            </p>
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              Organic Chemistry
            </p>
            <div className="bg-lightpurple w-[50%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto h-[150px] flex items-center p-2 gap-4 ">
          <div className="w-[50%] h-[80%] outline outline-1 outline-black rounded-lg flex items-center justify-center">
            <Image
              src="/caffeine-148821_1280-removebg-preview 2.png"
              alt="chemistry logo"
              width={50}
              height={50}
              className="w-full h-full"
            />
          </div>

          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              0% Completed
            </p>
            <p className="font-[Poppins] text-[30px] font-semibold self-end text-lightpurple">
              CHM 101
            </p>
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              Organic Chemistry
            </p>
            <div className="bg-lightpurple w-[50%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto h-[150px] flex items-center p-2 gap-4 ">
          <div className="w-[50%] h-[80%] outline outline-1 outline-black rounded-lg flex items-center justify-center">
            <Image
              src="/caffeine-148821_1280-removebg-preview 2.png"
              alt="chemistry logo"
              width={50}
              height={50}
              className="w-full h-full"
            />
          </div>

          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              0% Completed
            </p>
            <p className="font-[Poppins] text-[30px] font-semibold self-end text-lightpurple">
              CHM 101
            </p>
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              Organic Chemistry
            </p>
            <div className="bg-lightpurple w-[50%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto h-[150px] flex items-center p-2 gap-4 ">
          <div className="w-[50%] h-[80%] outline outline-1 outline-black rounded-lg flex items-center justify-center">
            <Image
              src="/caffeine-148821_1280-removebg-preview 2.png"
              alt="chemistry logo"
              width={50}
              height={50}
              className="w-full h-full"
            />
          </div>

          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              0% Completed
            </p>
            <p className="font-[Poppins] text-[30px] font-semibold self-end text-lightpurple">
              CHM 101
            </p>
            <p className="font-[Poppins] text-[15px] font-normal self-end">
              Organic Chemistry
            </p>
            <div className="bg-lightpurple w-[50%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
