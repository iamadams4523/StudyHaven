'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track current step
  const router = useRouter(); // New App Router hook for navigation

  const steps = [
    {
      title: 'Study at your Leisure Time',
      description: [
        'Study handouts ahead of your lecturers',
        'and get familiar with what the course is',
        ' about',
      ],
      image: '/6-removebg-preview 1.png',
    },
    {
      title: 'Practice Question in Real-Time',
      description: [
        'Lay your hands on curated E-tests and ',
        'exam question by our qualified tutors',
        'and get corrections to answer',
      ],
      image: '/Drawkit-Illustrations-Education-1-10_1-removebg-preview 1.png',
    },
    {
      title: 'Download PDFs for Convenience',
      description: [
        'PDFs can be downloaded and saved to',
        'your phone for easy reading during',
        'network congestion',
      ],
      image: '/43-removebg-preview 1.png',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/GetStarted'); // Navigate to "Get Started" page
    }
  };

  return (
    <div className="max-h-screen w-screen mx-auto h-screen bg-custom-gradient">
      <div className="h-[90vh] w-[100%] flex flex-col items-center mx-auto pt-[9rem]">
        <img
          src={steps[currentStep - 1].image}
          alt="Onboarding step image"
          width={250}
          height={200}
          className="mb-5"
        />
        <h3 className="font-sans font-bold text-[24px] leading-[28.8px] mb-5">
          {steps[currentStep - 1].title}
        </h3>
        {steps[currentStep - 1].description.map((text, idx) => (
          <p
            key={idx}
            className="font-sans font-light text-[18px] leading-[27px] text-center"
          >
            {text}
          </p>
        ))}
      </div>
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <button
          onClick={() => router.push('/GetStarted')}
          className="font-[poppins] text-gray-500"
        >
          Skip
        </button>
        <button
          onClick={handleNext}
          className="px-3 py-1 border-none rounded-md bg-lightpurple font-[poppins] text-white"
        >
          {currentStep < steps.length ? 'Next' : 'Get Started'}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
