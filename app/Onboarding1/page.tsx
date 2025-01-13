import Image from 'next/image';
import Link from 'next/link';

export default function Step2() {
  return (
    <div className="max-h-screen  w-screen mx-auto h-screen bg-custom-gradient ">
      <div className="h-[90vh] w-[100%] flex flex-col items-center mx-auto pt-[9rem]">
        <Image
          src="/Drawkit-Illustrations-Education-1-10_1-removebg-preview 1.png"
          alt="Onboarding image"
          width={400}
          height={400}
          className="mb-5"
        />
        <div className="flex items-center justify-between w-[50px] mb-4">
          <Image
            src="/Rectangle 133.png"
            alt="Rectagunlar lines"
            width={100}
            height={5}
            className="w-[0.5rem] h-[0.3rem]"
          />
          <Image
            src="/Rectangle 132.png"
            alt="Rectagunlar lines"
            width={50}
            height={5}
            className="w-[1.5rem] h-[0.3rem]"
          />
          <Image
            src="/Rectangle 134.png"
            alt="Rectagunlar lines"
            width={50}
            height={2}
            className="w-[0.5rem] h-[0.3rem]"
          />
        </div>
        <div className="w-[100%] flex flex-col justify-between items-center">
          <h3 className="font-sans font-bold text-[24px] leading-[28.8px] mb-5">
            Practice Question in Real-Time
          </h3>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            Lay your hands on curated E- test and
          </p>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            exam question by our qualified tutors
          </p>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            and get corrections to answers
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <Link className="font-[poppins]" href="/GetStarted">
          Skip
        </Link>
        <Link
          className="px-3 py-1 border-none rounded-md bg-lightpurple font-[poppins] text-white"
          href="/Onboarding2"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
