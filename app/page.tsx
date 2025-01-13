import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="max-h-screen w-screen mx-auto h-screen bg-custom-gradient ">
      <div className="h-[90vh] w-[100%] flex flex-col items-center mx-auto pt-[9rem] h-res">
        <Image
          src="/6-removebg-preview 1.png"
          alt="Onboarding image"
          width={250}
          height={200}
          className="mb-5"
        />
        <div className="flex items-center justify-between w-[50px] mb-4">
          <Image
            src="/Rectangle 132.png"
            alt="Rectangular lines"
            width={50}
            height={5}
            className="w-[1.5rem] h-[0.3rem]"
          />
          <Image
            src="/Rectangle 133.png"
            alt="Rectangular lines"
            width={100}
            height={5}
            className="w-[0.5rem] h-[0.3rem]"
          />
          <Image
            src="/Rectangle 134.png"
            alt="Rectangular lines"
            width={50}
            height={2}
            className="w-[0.5rem] h-[0.3rem]"
          />
        </div>
        <div className="w-[100%] flex flex-col justify-between items-center">
          <h3 className="font-sans font-bold text-[24px] leading-[28.8px] mb-5">
            Study at your Leisure Time
          </h3>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            Study handouts ahead of your lecturers
          </p>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            and get familiar with what the course is
          </p>
          <p className="font-sans font-light text-[18px] leading-[27px] text-center">
            about
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <Link className="font-[poppins]" href="/GetStarted">
          Skip
        </Link>
        <Link
          className="px-3 py-1 border-none rounded-md bg-lightpurple font-[poppins] text-white"
          href="/Onboarding1"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Home;
