import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[25%] bg-lightpurple flex flex-col justify-around items-center w-full rounded-bl-[35px] rounded-br-[35px]">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="w-[40%] flex items-center gap-2">
            <Image
              src="/Ellipse 36.png"
              alt="profile picture"
              width={50}
              height={50}
              className="w-[40px] h-[40px] rounded-[50%]"
            />
            <p className="font-[poppins] text-[18px] text-white font-bold">
              Hi Zainab,
            </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto rounded-full h-[40px] gap-2 bg-gray flex items-center">
          <FiSearch className="text-[20px] text-lightpurple ml-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full mx-auto rounded-full h-[40px] gap-2 bg-gray flex items-center border-none outline-none text-[16px] font-normal placeholder:text-black placeholder:font-[poppins]"
          />
        </div>
      </div>
      <div className="w-[90%] mt-4 mx-auto rounded-full border-lightpurple border-t-4 border-b-4 border-l border-r border-solid flex justify-around items-center p-1">
        <p className="font-[poppins] text-[16px] font-normal">Recent</p>
        <div className="w-[75%] flex justify-between items-center">
          <p className="font-[poppins] text-[0.7rem] md:text-base font-medium leading-6 bg-teal px-2 py-1 rounded-xl">
            CHM 101
          </p>
          <p className="font-[poppins] text-[0.7rem] md:text-base font-medium leading-6 bg-teal px-2 py-1 rounded-xl">
            MTH 410
          </p>
          <p className="font-[poppins] text-[0.7rem] md:text-base font-medium leading-6 bg-teal px-2 py-1 rounded-xl">
            TME 101
          </p>
        </div>
      </div>
      <div className="w-[90%] gap-4 mt-4 mx-auto flex flex-col">
        <div className="w-full flex justify-between items-center px-3">
          <p className="font-[poppins] text-[18px] font-medium leading-[100%]">
            Faculty
          </p>
          <p className="text-lightpurple font-[poppins] text-[16px] font-normal leading-[100%]">
            See all
          </p>
        </div>
        <div className="w-full flex justify-between items-center px-3">
          <div className="w-[8.5rem] h-[8.5rem] bg-lightpurple rounded-[12px] flex  flex-col p-2 gap-2">
            <div className="self-end">
              <Image
                src="/Industrial_Gear_PNG_Picture__Gear_Industry__Gear_Clipart__Gear__Industry_PNG_Image_For_Free_Download-removebg-preview 1.png"
                alt="profile picture"
                width={50}
                height={50}
                className="self-end"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-[poppins] font-bold text-2xl text-white">
                SEET
              </h2>
              <p className="font-[poppins] text-sm text-white">
                12 Departments
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-[1.5rem]">
        <p className="font-[poppins] text-[18px] font-medium leading-[100%] mb-5">
          Continue learning
        </p>
        <div className="w-full h-[70px] rounded-md bg-gray mx-auto flex gap-4 items-center px-3 py-[0.5rem]">
          <div className="border-[3px] border-blue-600 rounded-[50%] p-[0.1rem]">
            <Image
              src="/caffeine-148821_1280-removebg-preview 2.png"
              alt="profile picture"
              width={50}
              height={50}
              className="self-end w-[3rem]"
            />
          </div>
          <div className="flex flex-col w-[70%] gap-2">
            <p className="text-lightpurple font-[poppins] text-[16px] font-normal leading-[100%]">
              CHM 101 ( Organic Chemistry)
            </p>
            <p className="text-lightpurple font-[poppins] text-[16px] font-normal leading-[100%]">
              72% Complete
            </p>
            <div className="w-[70%] h-[2px] bg-lightpurple"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
