//This section tells your users the features of your project/solution

import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { CheckCircle2 } from 'lucide-react'; // Ensure you import the icon you want to use

const AllInOne = () => {
  const features = [
    {
      title: "Payment Pre-integrated",
      description: "Simplify transactions with pre-integrated Mpesa STK push."
    },
    {
      title: "Conversion Optimized Landing Page",
      description: "Maximize conversions with a professionally designed landing page."
    },
    {
      title: "Working MongoDB Backend",
      description: "Efficient data management with a fully functional MongoDB backend."
    },
    {
      title: "Comprehensive Documentation",
      description: "Access detailed guides to help you get started quickly."
    },
  ];

  return (
    <div name='features' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Our boilerplate provides everything you need to launch your product quickly and efficiently, with integrated payment systems, optimized landing pages, and more.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {features.map((feature, index) => (
            <div key={index} className='flex'>
              <div>
                <CheckCircle2 className='w-7 mr-4 text-green-600' />
              </div>
              <div>
                <h3 className='font-bold text-lg'>{feature.title}</h3>
                <p className='text-lg pt-2 pb-4'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
