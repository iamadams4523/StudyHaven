// import Image from 'next/image';
import Link from 'next/link';

const GetStarted = () => {
  return (
    <div className="bg-lavender">
      <div className="max-w-[1024px] w-screen mx-auto h-screen sflex flex-col">
        <div className="bg-teal h-[40%]">
          <h1 className="font-[Poppins] text-white text-[45px] font-bold leading-[67.5px] tracking-[0.04em] text-left from-font decoration-none pt-[5rem] pl-4">
            Hello 👋
          </h1>
          <p className="font-[Poppins]  text-white text-[24px] font-normal leading-[36px] tracking-[0.04em] text-left from-font decoration-none pl-4">
            Seeker of Knowledge
          </p>
        </div>
        <div className="h-[20%] bg-blue-500">
          {/* <Image
            src="/Rectangle 136.png"
            alt="wave"
            width={5}
            height={5}
            className="w-full"
          /> */}
        </div>
        <div className="bg-white h-[40%] flex flex-col gap-4 justify-center items-center">
          <Link
            href="/auth/Signin"
            className="text-white bg-lightpurple border px-[100px] py-3 font-[Poppins] text-[20px] font-normal leading-[30px] tracking-[0.04em] rounded-[30px]"
          >
            Sign In
          </Link>
          <Link
            href="/auth/Signup"
            className="text-white bg-grey border px-[28px] py-3 font-[Poppins] text-[20px] font-normal leading-[30px] tracking-[0.04em] rounded-[30px]"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
