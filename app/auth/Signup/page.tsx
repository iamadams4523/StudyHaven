import Image from 'next/image';
import Link from 'next/link';

const Signin = () => {
  return (
    <div className="bg-lavender">
      <div className='"max-h-screen max-w-[1024px] w-screen mx-auto h-screen sflex flex-col'>
        <div className="bg-teal h-[40%]">
          <h1 className="font-[Poppins] text-white text-[45px] font-bold leading-[67.5px] tracking-[0.04em] text-left from-font decoration-none pt-[5rem] pl-4">
            Welcome
            <br />
            Back 😎
          </h1>
          <p className="font-[Poppins]  text-white text-[24px] font-normal leading-[36px] tracking-[0.04em] text-left from-font decoration-none pl-4">
            Seeker of Knowledge
          </p>
        </div>
        <div className="h-[10%] bg-blue-500">
          {/* <Image
            src="/Rectangle 136.png"
            alt="wave"
            width={5}
            height={5}
            className="w-full"
          /> */}
        </div>
        <form className="bg-white h-[50%] flex flex-col gap-4 items-center">
          <div className="w-[90%] flex flex-col justify-between gap-3 mt-4">
            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-teal">
              Name
            </label>
            <input
              className="w-full h-[40px] border border-black"
              type="text"
              name="Name"
              id="Name"
            />
            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-teal">
              Email
            </label>
            <input
              className="w-full h-[40px] border border-black"
              type="text"
              name="email"
              id="email"
            />
            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-teal">
              Password
            </label>
            <input
              className="w-full h-[40px] border border-black"
              type="text"
              name="Password"
              id="Password"
            />
          </div>
          <div className="flex">
            <p className="font-[Poppins] text-[14px] font-normal leading-[15.4px] text-left">
              I accept the terms and policy
            </p>
          </div>
          <button
            type="submit"
            className="text-white bg-lightpurple border px-[100px] py-3 font-[Poppins] text-[20px] font-normal leading-[30px] tracking-[0.04em] rounded-[30px]"
          >
            Sign Up
          </button>
          <div className="flex flex-col justify-center items-center">
            <p className="font-[Poppins] text-[16px] font-light leading-[24px] tracking-[0.02em] text-left ">
              or signup with
            </p>
            <Image
              src="/logos_google.png"
              alt="google logo"
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
          </div>

          <div className="flex justify-center items-center w-[90%] mx-auto">
            <Link
              className="font-[poppins] text-sm font-light leading-6 tracking-wide text-left"
              href="/auth/Signup"
            >
              Already Have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
