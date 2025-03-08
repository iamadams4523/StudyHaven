'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdDownload } from 'react-icons/md';

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Submit complete');
    }, 5000);
  };
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
      <div className="w-[90%] mx-auto h-[70%] mt-3 flex flex-col items-center justify-center gap-y-4">
        <p className="font-[poppins] text-[16px] font-normal leading-[27.2px]">
          Renewable Energy Sources - Summary Renewable energy sources are
          naturally replenished resources such as sunlight, wind, water,
          geothermal heat, and biomass, which are used for sustainable energy
          production. Solar energy harnesses sunlight for power and heating,
          while wind energy converts wind into electricity through turbines.
          Hydropower generates energy from moving water, and geothermal energy
          extracts heat from the Earth's interior for heating and electricity.
          Biomass energy relies on organic materials for fuel and heat, and
          tidal and wave energy capture power from ocean movements. These
          sources are sustainable and environmentally friendly, producing
          minimal emissions. They promote energy independence, economic growth,
          and have low operating costs after initial installation. However,
          challenges include intermittent supply depending on weather and
          geography, high setup costs, and the need for significant space and
          infrastructure.
        </p>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`flex items-center self-end gap-2 px-4 py-2 rounded-lg transition ${
            isSubmitting
              ? 'bg-purple-700 cursor-not-allowed text-white'
              : 'bg-lightpurple hover:bg-purple-700 text-white font-semibold'
          }`}
        >
          {isSubmitting ? (
            <>
              <span>Submitting...</span>
            </>
          ) : (
            <>Submit</>
          )}
        </button>
      </div>
    </div>
  );
};

export default Page;
