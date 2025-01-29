import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[20%] bg-lightpurple flex flex-col justify-end items-center w-full rounded-bl-[35px] rounded-br-[35px]">
        <h1 className="font-[poppins] text-[20px] font-semibold leading-[30px]">
          My Profile
        </h1>
      </div>
      <div className="mt-5 h-[30%] flex flex-col items-center justify-center">
        <Image
          src="/profile.png"
          alt="profile picture"
          width={50}
          height={50}
          className="w-[10rem] h-[10rem] rounded-[50%] outline outline-3 outline-lightpurple mb-2"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-[poppins] text-[16px] font-bold leading-[24px] text-lightpurple">
            AJAGBE SULAYMAN
          </h1>
          <p className="font-[poppins] text-[10px] text-lightpurple font-normal leading-[15px]">
            sulyman001fem@gmail.com
          </p>
        </div>
      </div>
      <div className="h-[50%] w-[70%] mx-auto flex flex-col gap-6 items-center">
        <div className="w-full flex items-center justify-between">
          <p className="font-[poppins] text-[18px] font-medium leading-[27px]">
            Change Profile Picture
          </p>
          <FaChevronRight className="w-5 h-5 p-1 outline outline-1 rounded-[50%]" />
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="font-[poppins] text-[18px] font-medium leading-[27px]">
            Change Password
          </p>
          <FaChevronRight className="w-5 h-5 p-1 outline outline-1 rounded-[50%]" />
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="font-[poppins] text-[18px] font-medium leading-[27px]">
            Activity Log
          </p>
          <FaChevronRight className="w-5 h-5 p-1 outline outline-1 rounded-[50%]" />
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="font-[poppins] text-[18px] font-medium leading-[27px]">
            Progress Tracker
          </p>
          <FaChevronRight className="w-5 h-5 p-1 outline outline-1 rounded-[50%]" />
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="font-[poppins] text-[18px] font-medium leading-[27px]">
            Log Out
          </p>
          <FaChevronRight className="w-5 h-5 p-1 outline outline-1 rounded-[50%]" />
        </div>
      </div>
    </div>
  );
};
export default page;
