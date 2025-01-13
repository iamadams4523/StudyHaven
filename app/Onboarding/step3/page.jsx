import Image from 'next/image';
import Link from 'next/link';

export default function Step3() {
  return (
    <div className="max-h-screen max-w-[430px] w-screen mx-auto h-screen bg-custom-gradient">
      <div className="h-[90vh] w-[100%] flex flex-col items-center mx-auto pt-[9rem]">
        <Image
          src="/43-removebg-preview 1.png"
          alt="Onboarding image"
          width={250}
          height={200}
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
            Download PDFs for Convieniency
          </h3>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            PDFs can be downloaded and saved to
          </p>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            your phone for easy reading during
          </p>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            network congenstion
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <Link className="font-[poppins]" href="/Onboarding/getStarted">
          Skip
        </Link>
        <Link
          className="px-3 py-1 border-none rounded-md bg-lightpurple font-[poppins] text-white"
          href="/Onboarding/getStarted"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
