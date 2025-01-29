import { FiSearch } from 'react-icons/fi';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <h1>My Classroom</h1>
        <div className="w-[90%] mx-auto rounded-full h-[40px] gap-2 bg-gray flex items-center">
          <FiSearch className="text-[20px] text-lightpurple ml-2" />
          <p className="font-[poppins] text-[16px] font-normal">Search</p>
        </div>
      </div>
      <div className="h-[20%] bg-lightpurple flex flex-col justify-around items-center w-full rounded-bl-[35px] rounded-br-[35px]"></div>
    </div>
  );
};
export default page;
