'use client';
// import { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
// import Image from 'next/image';
// import { FaArrowRightLong } from 'react-icons/fa6';
// import { MdDownload } from 'react-icons/md';

// const Page = () => {
//   return (
//     <div className="w-full min-h-screen">
//       <div className="h-[15%] flex flex-col justify-around items-center mt-5 mb-2">
//         <h1 className="ml-[1.5rem] font-[poppins] text-[20px] font-semibold leading-[30px] self-start">
//           Assessment
//         </h1>
//       </div>
//       <div className="h-[15%] w-full bg-lightpurple flex justify-between items-center rounded-bl-[35px] rounded-br-[35px] px-4">
//         <div className="flex flex-col h-full gap-3 mt-3">
//           <h1 className="font-poppins text-[20px] font-semibold leading-[30px] text-white">
//             CHM101 TEST
//           </h1>
//           <p className="font-poppins text-[15px] font-medium leading-[22.5px] text-white">
//             100 | Biochemistry | SLS
//           </p>
//         </div>
//         <div className="flex flex-col items-center">
//           <Image
//             src="/laboratory-glassware-containing-colorful-liquid 1.png"
//             alt="chemistry logo"
//             width={50}
//             height={50}
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//       <div className="w-[90%] mx-auto h-[70%] mt-3 flex flex-col items-center justify-between gap-y-4">
//         <p className="font-[poppins] text-[16px] font-[700] leading-[27.2px] text-lightpurple">
//           Are you sure you want to submit this test
//         </p>
//         <div>
//           <button>Yes</button>
//           <button>No</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

// import { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
// import Image from 'next/image';
// import { FaArrowRightLong } from 'react-icons/fa6';
// import { MdDownload } from 'react-icons/md';

// const Page = () => {
//   return (
//     <div className="w-full min-h-screen">
//       <div className="h-[15%] flex flex-col justify-around items-center mt-5 mb-2">
//         <h1 className="ml-[1.5rem] font-[poppins] text-[20px] font-semibold leading-[30px] self-start">
//
//         </h1>
//       </div>
//       <div className="h-[15%] w-full bg-lightpurple flex justify-between items-center rounded-bl-[35px] rounded-br-[35px] px-4">
//         <div className="flex flex-col h-full gap-3 mt-3">
//           <h1 className="font-poppins text-[20px] font-semibold leading-[30px] text-white">
//             CHM101 TEST
//           </h1>
//           <p className="font-poppins text-[15px] font-medium leading-[22.5px] text-white">
//             100 | Biochemistry | SLS
//           </p>
//         </div>
//         <div className="flex flex-col items-center">
//           <Image
//             src="/laboratory-glassware-containing-colorful-liquid 1.png"
//             alt="chemistry logo"
//             width={50}
//             height={50}
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//       <div className="w-[90%] mx-auto h-[70%] mt-3 flex flex-col items-center justify-between gap-y-4">
//         <p className="font-[poppins] text-[16px] font-[700] leading-[27.2px] text-lightpurple">
//           Are you sure you want to submit this test
//         </p>
//         <div className="w-[70%] mx-auto flex justify-between items-center">
//           <button className="font-[poppins] text-[30px] px-2 py-1 font-bold  rounded-sm hover:bg-lightpurple">
//             Yes
//           </button>
//           <button className="font-[poppins] text-[30px] px-2 py-1 font-bold  rounded-sm hover:bg-lightpurple">
//             No
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdDownload } from 'react-icons/md';

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="h-[15%] flex flex-col justify-around items-center mt-5 mb-2">
        <h1 className="ml-[1.5rem] font-[poppins] text-[20px] font-semibold leading-[30px] self-start">
          Assessment
        </h1>
      </div>
      <div className="h-[15%] w-full bg-lightpurple flex justify-between items-center rounded-bl-[35px] rounded-br-[35px] px-4">
        <div className="flex flex-col h-full gap-3 mt-3">
          <h1 className="font-poppins text-[20px] font-semibold leading-[30px] text-white">
            CHM101 TEST
          </h1>
          <p className="font-poppins text-[15px] font-medium leading-[22.5px] text-white">
            100 | Biochemistry | SLS
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/laboratory-glassware-containing-colorful-liquid 1.png"
            alt="chemistry logo"
            width={50}
            height={50}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[70%] mt-3 flex flex-col items-center justify-center">
        <p className="font-[poppins] text-[16px] font-[700] leading-[27.2px] text-lightpurple">
          CONGRATULATIONS , YOU HAVE SUCCESSFULLY SUBMITTED ✅
        </p>
        <div className="w-[40%] mx-auto mt-[5rem] flex flex-col justify-center items-center">
          <p className="font-[poppins] text-[13px] font-[700] leading-[27.2px] text-lightpurple">
            Your score is
          </p>
          <div className="p-2 bg-blue-700 flex flex-col justify-center items-center gap-4 rounded-[12px]">
            <h1 className="font-[poppins] text-[48px] font-bold text-white">
              35/50
            </h1>
            <p className="font-[poppins] text-[16px] text-white font-light">
              you can do better
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
// 'use client';
// import React from 'react';
// import { FiSearch } from 'react-icons/fi';
// import Image from 'next/image';
// import { FaArrowRightLong } from 'react-icons/fa6';
// import { MdDownload } from 'react-icons/md';

// const Page = () => {
//   return (
//     <div className="w-full min-h-screen">
//       <div className="h-[15%] flex flex-col justify-around items-center mb-2">
//         <h1 className="ml-[1.5rem] mt-[1.1rem] md:ml-[4.5rem] font-[poppins] text-[20px] font-semibold leading-[30px] self-start">
//           My Classroom
//         </h1>
//         <div className="w-[90%] mx-auto rounded-full h-[40px] gap-2 bg-gray flex items-center">
//           <FiSearch className="text-[20px] text-lightpurple ml-2" />
//           <p className="font-[poppins] text-[16px] font-normal">Search</p>
//         </div>
//       </div>
//       <div className="h-[15%] w-full bg-lightpurple flex justify-between items-center rounded-bl-[35px] rounded-br-[35px] px-4">
//         <div className="flex flex-col h-full gap-3 mt-3 md:ml-[3.5rem]">
//           <h1 className="font-poppins text-[20px] font-semibold leading-[30px] text-white">
//             100 LEVEL
//           </h1>
//           <p className="font-poppins text-[15px] font-medium leading-[22.5px] text-white">
//             100 | Biochemistry | SLS
//           </p>
//         </div>
//         <div className="flex flex-col items-center">
//           <Image
//             src="/caffeine-148821_1280-removebg-preview 2.png"
//             alt="chemistry logo"
//             width={50}
//             height={50}
//             className="w-full h-full"
//           />
//         </div>
//       </div>
//       <div className="w-[90%] mx-auto h-[70%] mt-3 flex flex-col items-center justify-center gap-y-3">
//         <div className="w-full mx-auto min-h-[150px] flex flex-col items-center p-2 gap-4">
//           <div className="w-full min-h-[80px] outline outline-1 outline-gray rounded-lg flex items-center justify-end mx-auto p-1">
//             <Image
//               src="/laboratory-glassware-containing-colorful-liquid 1.png"
//               alt="chemistry logo"
//               width={50}
//               height={50}
//               className="w-[10rem] h-auto"
//             />
//           </div>
//           <div className="w-[100%] flex justify-between items-center">
//             <div className="flex flex-col gap-2">
//               <p className="font-[Poppins] text-[30px] font-semibold">
//                 CHM 101 (a)
//               </p>
//               <p className="font-[Poppins] text-[15px] font-normal">
//                 Organic Chemistry
//               </p>
//               <Image
//                 src="/Rectangle 156.png"
//                 alt="range"
//                 width={50}
//                 height={50}
//                 className="w-[10rem]"
//               />
//             </div>
//             <MdDownload className="w-[4rem] text-[3rem] text-lightpurple" />
//           </div>
//         </div>
//         <div className="w-full mx-auto min-h-[150px] flex flex-col items-center p-2 gap-4">
//           <div className="w-full min-h-[80px] outline outline-1 outline-gray rounded-lg flex items-center justify-end mx-auto p-1">
//             <Image
//               src="/laboratory-glassware-containing-colorful-liquid 1.png"
//               alt="chemistry logo"
//               width={50}
//               height={50}
//               className="w-[10rem] h-auto"
//             />
//           </div>
//           <div className="w-[100%] flex justify-between items-center">
//             <div className="flex flex-col gap-2">
//               <p className="font-[Poppins] text-[30px] font-semibold">
//                 CHM 101 (a)
//               </p>
//               <p className="font-[Poppins] text-[15px] font-normal">
//                 Organic Chemistry
//               </p>
//               <Image
//                 src="/Rectangle 156.png"
//                 alt="range"
//                 width={50}
//                 height={50}
//                 className="w-[10rem]"
//               />
//             </div>
//             <MdDownload className="w-[4rem] text-[3rem] text-lightpurple" />
//           </div>
//         </div>
//         <div className="w-full mx-auto min-h-[150px] flex flex-col items-center p-2 gap-4">
//           <div className="w-full min-h-[80px] outline outline-1 outline-gray rounded-lg flex items-center justify-end mx-auto p-1">
//             <Image
//               src="/laboratory-glassware-containing-colorful-liquid 1.png"
//               alt="chemistry logo"
//               width={50}
//               height={50}
//               className="w-[10rem] h-auto"
//             />
//           </div>
//           <div className="w-[100%] flex justify-between items-center">
//             <div className="flex flex-col gap-2">
//               <p className="font-[Poppins] text-[30px] font-semibold">
//                 CHM 101 (a)
//               </p>
//               <p className="font-[Poppins] text-[15px] font-normal">
//                 Organic Chemistry
//               </p>
//               <Image
//                 src="/Rectangle 156.png"
//                 alt="range"
//                 width={50}
//                 height={50}
//                 className="w-[10rem]"
//               />
//             </div>
//             <MdDownload className="w-[4rem] text-[3rem] text-lightpurple" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
