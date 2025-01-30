import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const Page = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[15%] flex flex-col justify-around items-center mb-2">
        <h1 className="ml-[1.5rem] font-[poppins] text-[20px] font-semibold leading-[30px] self-start">
          My Classroom
        </h1>
        <div className="w-[90%] mx-auto rounded-full h-[40px] gap-2 bg-gray flex items-center">
          <FiSearch className="text-[20px] text-lightpurple ml-2" />
          <p className="font-[poppins] text-[16px] font-normal">Search</p>
        </div>
      </div>
      <div className="h-[15%] w-full bg-lightpurple flex justify-between items-center rounded-bl-[35px] rounded-br-[35px] px-4">
        <div className="flex flex-col h-full gap-3 mt-3">
          <h1 className="font-poppins text-[20px] font-semibold leading-[30px] text-white">
            School of Life Science
          </h1>
          <p className="font-poppins text-[15px] font-medium leading-[22.5px] text-white">
            7 Departments
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/science-4989678_1920-removebg-preview 1.png"
            alt="science logo"
            width={50}
            height={50}
            className="w-[5rem] self-end"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 w-full place-items-center gap-y-4 mt-3">
        <div className="flex flex-col items-center justify-around rounded-lg outline outline-1 w-[150px] h-[150px]">
          <div className="w-[90%] h-[45%] flex items-center justify-center bg-lightpurple rounded-lg">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="lab pic"
              width={50}
              height={50}
              className=""
            />
          </div>
          <p className="font-[Poppins] text-[18px] font-semibold leading-[30px]">
            BIOCHEMISTRY
          </p>
          <div className="bg-lightpurple w-[40%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end mr-2">
            <p className="font-[poppins] text-[12px] font-light leading-[24px]">
              View
            </p>
            <FaArrowRightLong className="h-4 w-5" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around rounded-lg outline outline-1 w-[150px] h-[150px]">
          <div className="w-[90%] h-[45%] flex items-center justify-center bg-lightpurple rounded-lg">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="lab pic"
              width={50}
              height={50}
              className=""
            />
          </div>
          <p className="font-[Poppins] text-[18px] font-semibold leading-[30px]">
            BIOCHEMISTRY
          </p>
          <div className="bg-lightpurple w-[40%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end mr-2">
            <p className="font-[poppins] text-[12px] font-light leading-[24px]">
              View
            </p>
            <FaArrowRightLong className="h-4 w-5" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around rounded-lg outline outline-1 w-[150px] h-[150px]">
          <div className="w-[90%] h-[45%] flex items-center justify-center bg-lightpurple rounded-lg">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="lab pic"
              width={50}
              height={50}
              className=""
            />
          </div>
          <p className="font-[Poppins] text-[18px] font-semibold leading-[30px]">
            BIOCHEMISTRY
          </p>
          <div className="bg-lightpurple w-[40%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end mr-2">
            <p className="font-[poppins] text-[12px] font-light leading-[24px]">
              View
            </p>
            <FaArrowRightLong className="h-4 w-5" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around rounded-lg outline outline-1 w-[150px] h-[150px]">
          <div className="w-[90%] h-[45%] flex items-center justify-center bg-lightpurple rounded-lg">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="lab pic"
              width={50}
              height={50}
              className=""
            />
          </div>
          <p className="font-[Poppins] text-[18px] font-semibold leading-[30px]">
            BIOCHEMISTRY
          </p>
          <div className="bg-lightpurple w-[40%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end mr-2">
            <p className="font-[poppins] text-[12px] font-light leading-[24px]">
              View
            </p>
            <FaArrowRightLong className="h-4 w-5" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around rounded-lg outline outline-1 w-[150px] h-[150px]">
          <div className="w-[90%] h-[45%] flex items-center justify-center bg-lightpurple rounded-lg">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="lab pic"
              width={50}
              height={50}
              className=""
            />
          </div>
          <p className="font-[Poppins] text-[18px] font-semibold leading-[30px]">
            BIOCHEMISTRY
          </p>
          <div className="bg-lightpurple w-[40%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end mr-2">
            <p className="font-[poppins] text-[12px] font-light leading-[24px]">
              View
            </p>
            <FaArrowRightLong className="h-4 w-5" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around rounded-lg outline outline-1 w-[150px] h-[150px]">
          <div className="w-[90%] h-[45%] flex items-center justify-center bg-lightpurple rounded-lg">
            <Image
              src="/laboratory-glassware-containing-colorful-liquid 1.png"
              alt="lab pic"
              width={50}
              height={50}
              className=""
            />
          </div>
          <p className="font-[Poppins] text-[18px] font-semibold leading-[30px]">
            BIOCHEMISTRY
          </p>
          <div className="bg-lightpurple w-[40%] px-[0.5rem] py-[0.01rem] flex items-center justify-between rounded-lg self-end mr-2">
            <p className="font-[poppins] text-[12px] font-light leading-[24px]">
              View
            </p>
            <FaArrowRightLong className="h-4 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
