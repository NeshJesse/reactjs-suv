//THis is an alternative that allows you to display your products features
//just replace allinone with Features
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div  name="features" className="relative mt-20 border-b border-neutral-800 min-h-[500px]">
      <div className="text-center">
        <span className="text-5xl font-bold text-center">
          Features
        </span>

      </div>
      <div className="flex flex-wrap mt-6 lg:mt-10">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;