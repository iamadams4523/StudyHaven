'use client';
import Image from 'next/image';
import Link from 'next/link';
import { GrHomeRounded } from 'react-icons/gr';
import { PiBookOpenUserBold } from 'react-icons/pi';
import { LuClipboardPenLine } from 'react-icons/lu';
import { MdOutlinePersonOutline } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="flex items-center justify-around  max-w-screen w-full h-[40px] rounded-lg bg-lightpurple mx-auto mb-[.4 rem]">
      <Link
        href="/Home"
        className="h-[30px] w-[30px] rounded-[50%] hover:bg-white flex justify-center items-center"
      >
        <GrHomeRounded className="h-[20px] w-[20px] text-white hover:text-teal" />
      </Link>
      <Link
        href="/Classroom/department_name"
        className="h-[30px] w-[30px] rounded-[50%] hover:bg-white flex justify-center items-center"
      >
        <PiBookOpenUserBold className="h-[20px] w-[20px] text-white hover:text-teal" />
      </Link>
      <Link
        href="/Assessment/take_a_test"
        className="h-[30px] w-[30px] rounded-[50%] hover:bg-white flex justify-center items-center"
      >
        <LuClipboardPenLine className="h-[20px] w-[20px] text-white hover:text-teal" />
      </Link>
      <Link
        href="/Home/Profile"
        className="h-[30px] w-[30px] rounded-[50%] hover:bg-white flex justify-center items-center"
      >
        <MdOutlinePersonOutline className="h-[20px] w-[20px] text-white hover:text-teal" />
      </Link>
    </div>
  );
};
export default Footer;
