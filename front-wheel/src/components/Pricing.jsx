//this is the pricing section that show cases your prices
/*it is fed by constants pricingOptions data,if you want to edit what appears here
go to constants/index.jsx and edit the pricingOptions
*/

import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const Pricing = () => {
  return (
    <div name="pricing" className="mt-20">
      <h2 className="text-xl sm:text-3xl lg:text-6xl text-center my-4 ">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="sm:w-1/2 lg:w-1/3 p-2">
            <div className="px-4 py-3 w-200 h-100 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-8"> 
                {option.stack}
              </p>
              <p className="text-2xl mb-5">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-2 ml-2">
                    (Best Seller)
                  </span>
                )}
                {option.title === "Popular" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-2 ml-2">
                    (2nd Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-4 mr-2">{option.price}</span>
                <span className="w-[14rem] text-neutral-400 tracking-tight">/Buy once</span>
              </p>
              <p className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-2 ml-2">Choose your tech stack</p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-2 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
                <a href="https://forms.gle/R21R4Hs25BSLQHQcA" target="_blank" rel="noopener noreferrer" 
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                  Request Access
                  </a>.
                
            </div>
          </div>
        ))}
        <p className="mt-3 text-2xl  px-6 text-green-500 ">
        Not interested in any vehicle,just specify what parts
        you want
        between the Front-wheels, Back-wheels and spare-wheel
        <br/>
        <a href="https://forms.gle/R21R4Hs25BSLQHQcA" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Specify here</a>.
          </p>
        
      </div>
    </div>
  );
};

export default Pricing;
