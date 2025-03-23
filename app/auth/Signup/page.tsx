import Image from 'next/image';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';

const Signin = () => {
  return (
    // <div className="bg-lavender min-h-screen">
    <div className="bg-custom-gradient min-h-screen">
      <div className="max-w-[1024px] w-screen mx-auto h-[100%] flex flex-col">
        {/* <div className="bg-teal h-[40%]"> */}
        <div className="h-[40%]">
          <h1 className="font-[Poppins] text-white text-[45px] font-bold leading-[67.5px] tracking-[0.04em] text-left from-font decoration-none pt-[5rem] pl-4">
            Create account
          </h1>
        </div>
        {/* <div className="h-[100px] bg-blue-500"> */}
        {/* <Image
            src="/Rectangle 136.png"
            alt="wave"
            width={5}
            height={5}
            className="w-full"
          /> */}
        {/* </div> */}
        <form className="h-[50%] flex flex-col gap-4 items-center">
          <div className="w-[90%] flex flex-col justify-between gap-3 mt-4">
            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-lightblue">
              Name
            </label>
            <input
              className="w-full bg-teal h-[40px] border border-black"
              type="text"
              name="Name"
              id="Name"
            />
            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-lightblue">
              Email
            </label>
            <input
              className="w-full bg-teal h-[40px] border border-black"
              type="text"
              name="email"
              id="email"
            />
            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-lightblue">
              Password
            </label>
            <input
              className="w-full bg-teal h-[40px] border border-black"
              type="text"
              name="Password"
              id="Password"
            />
            <div className="flex items-center gap-2">
              <Switch id="acceptance" />
              <label
                className="font-[Poppins] text-[14px] font-normal"
                htmlFor="acceptance"
              >
                I accept the terms and policy
              </label>
            </div>
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
              href="/auth/Signin"
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
