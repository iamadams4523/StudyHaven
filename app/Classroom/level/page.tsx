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
            Biochemistry
          </h1>
          <p className="font-poppins text-[15px] font-medium leading-[22.5px] text-white">
            Department
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/laboratory-glassware-containing-colorful-liquid 1.png"
            alt="science logo"
            width={50}
            height={50}
            className="w-[5rem] self-end"
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[70%] mt-3 flex flex-col items-center gap-7 mb-2">
        <div className="w-full mx-auto outline outline-1 rounded-lg h-[150px] flex items-center p-2 gap-4 ">
          <h2 className="w-[50%] h-[80%] bg-lightpurple rounded-lg p-1 font-[Rockwell Extra Bold] text-[100px] font-extrabold flex items-center justify-center text-white">
            1
          </h2>
          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[30px] font-semibold self-end">
              100 LEVEL
            </p>
            <div className="bg-lightpurple w-full px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View Courses
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto outline outline-1 rounded-lg h-[150px] flex items-center p-2 gap-4 ">
          <h2 className="w-[50%] h-[80%] bg-lightpurple rounded-lg p-1 font-[Rockwell Extra Bold] text-[100px] font-extrabold flex items-center justify-center text-white">
            1
          </h2>
          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[30px] font-semibold self-end">
              100 LEVEL
            </p>
            <div className="bg-lightpurple w-full px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View Courses
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto outline outline-1 rounded-lg h-[150px] flex items-center p-2 gap-4 ">
          <h2 className="w-[50%] h-[80%] bg-lightpurple rounded-lg p-1 font-[Rockwell Extra Bold] text-[100px] font-extrabold flex items-center justify-center text-white">
            1
          </h2>
          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[30px] font-semibold self-end">
              100 LEVEL
            </p>
            <div className="bg-lightpurple w-full px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View Courses
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto outline outline-1 rounded-lg h-[150px] flex items-center p-2 gap-4 ">
          <h2 className="w-[50%] h-[80%] bg-lightpurple rounded-lg p-1 font-[Rockwell Extra Bold] text-[100px] font-extrabold flex items-center justify-center text-white">
            1
          </h2>
          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[30px] font-semibold self-end">
              100 LEVEL
            </p>
            <div className="bg-lightpurple w-full px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View Courses
              </p>
              <FaArrowRightLong className="h-4 w-5" />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto outline outline-1 rounded-lg h-[150px] flex items-center p-2 gap-4 ">
          <h2 className="w-[50%] h-[80%] bg-lightpurple rounded-lg p-1 font-[Rockwell Extra Bold] text-[100px] font-extrabold flex items-center justify-center text-white">
            1
          </h2>
          <div className="w-[50%] flex flex-col">
            <p className="font-[Poppins] text-[30px] font-semibold self-end">
              100 LEVEL
            </p>
            <div className="bg-lightpurple w-full px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end">
              <p className="font-[poppins] text-[12px] font-light leading-[24px]">
                View Courses
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
