import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[25%] bg-lightpurple flex flex-col justify-around items-center w-full rounded-bl-[35px] rounded-br-[35px]">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="w-[40%] flex justify-between items-center">
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
          <Image
            src="/Frame 21.svg"
            alt="profile picture"
            width={50}
            height={50}
            className="w-[40px] h-[40px] rounded-[50%]"
          />
        </div>
        <div className="w-[90%] mx-auto rounded-full h-[40px] gap-2 bg-gray flex items-center">
          <FiSearch className="text-[20px] text-lightpurple ml-2" />
          <p className="font-[poppins] text-[16px] font-normal">Search</p>
        </div>
      </div>
      <div className=" w-[90%] mt-4 mx-auto rounded-full border-lightpurple border-t-4 border-b-4 border-l border-r border-solid flex justify-around items-center p-1">
        <p className="font-[poppins] text-[16px] font-normal">Recent</p>
        <div className="w-[70%] flex justify-between items-center">
          <p className="font-[poppins] text-base font-medium leading-6 bg-teal px-2 py-1 rounded-xl">
            CHM 101
          </p>
          <p className="font-[poppins] text-base font-medium leading-6 bg-teal px-2 py-1 rounded-xl">
            MTH 410
          </p>
          <p className="font-[poppins] text-base font-medium leading-6 bg-teal px-2 py-1 rounded-xl">
            TME 101
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
