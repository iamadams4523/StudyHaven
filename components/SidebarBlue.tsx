import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { GrHomeRounded } from 'react-icons/gr';
import { PiBookOpenUserBold } from 'react-icons/pi';
import { RiGraduationCapFill } from 'react-icons/ri';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { RiContactsBook3Line } from 'react-icons/ri';
import { MdOutlineSettings } from 'react-icons/md';
import { IoLogOutOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AiOutlineMenuUnfold className="w-7 text-[30px] text-lightpurple" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-centerjustify-between mt-5 gap-[0.5rem]">
            <Image
              src="/Ellipse 36.png"
              alt="profiile picture"
              width={50}
              height={50}
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-poppins text-[16px] font-bold leading-[24px] text-white">
                AJAGBE SULAYMAN
              </h1>
              <p className="font-[poppins] text-[10px] text-white font-normal leading-[15px]">
                sulyman001fem@gmail.com
              </p>
            </div>
          </div>
        </SheetHeader>
        <div className="flex flex-col mt-5 gap-[2rem]">
          <Link
            href="/Home"
            className="flex justify-start items-center pl-5 gap-[3rem] hover:outline hover:outline-2 hover:outline-white hover:rounded-[12px]"
          >
            <GrHomeRounded className="h-[25px] w-[25px] text-white hover:text-teal" />
            <p className="font-[poppins] text-white text-[18px] font-medium ">
              Home
            </p>
          </Link>
          <Link
            href="/Assessment"
            className="flex justify-start items-center pl-5 gap-[3rem] hover:outline hover:outline-2 hover:outline-white hover:rounded-[12px]"
          >
            <RiGraduationCapFill className="h-[30px] w-[30px] text-white hover:text-teal" />
            <p className="font-[poppins] text-white text-[18px] font-medium ">
              Assessment
            </p>
          </Link>
          <Link
            href="/Classroom/department_name"
            className="flex justify-start items-center pl-5 gap-[3rem] hover:outline hover:outline-2 hover:outline-white hover:rounded-[12px]"
          >
            <PiBookOpenUserBold className="h-[30px] w-[30px] text-white hover:text-teal" />
            <p className="font-[poppins] text-white text-[18px] font-medium ">
              My Classroom
            </p>
          </Link>
          <Link
            href="/Home/Profile"
            className="flex justify-start items-center pl-5 gap-[3rem] hover:outline hover:outline-2 hover:outline-white hover:rounded-[12px]"
          >
            <MdOutlinePersonOutline className="h-[30px] w-[30px] text-white hover:text-teal" />
            <p className="font-[poppins] text-white text-[18px] font-medium ">
              Profile
            </p>
          </Link>
          <Link
            href="/Home/ContactUs"
            className="flex justify-start items-center pl-5 gap-[3rem] hover:outline hover:outline-2 hover:outline-white hover:rounded-[12px]"
          >
            <RiContactsBook3Line className="h-[30px] w-[30px] text-white hover:text-teal" />
            <p className="font-[poppins] text-white text-[18px] font-medium ">
              Contact Us
            </p>
          </Link>
          {/* <Link
            href="/"
            className="flex justify-start items-center pl-5 gap-[3rem] hover:outline hover:outline-2 hover:outline-white hover:rounded-[12px]"
          >
            <MdOutlineSettings className="h-[30px] w-[30px] text-white hover:text-teal" />
            <p className="font-[poppins] text-white text-[18px] font-medium ">
              Settings
            </p>
          </Link> */}
          <Link
            href="/auth/Signin"
            className="flex justify-start items-center pl-5 gap-[3rem] hover:outline hover:outline-2 hover:outline-white hover:rounded-[12px]"
          >
            <IoLogOutOutline className="h-[30px] w-[30px] text-white hover:text-teal" />
            <p className="font-[poppins] text-white text-[18px] font-medium ">
              Log out
            </p>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
