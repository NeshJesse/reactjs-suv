//This is also a hero section but with no image.screenshot is also available
import { Link, animateScroll as scroll, } from 'react-scroll'

const HeroSection = () => {
    return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 name="home" className="text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide">
          Don't waste time
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            re-inventing the wheel
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          The LaunchSUV.Ke Boilerplate provides a developer with all the basic boilerplate code to
          launch any digital service in the Kenyan online market across all popular tech stacks
        </p>
        <div className="flex justify-center my-10">
          <Link className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          to='pricing' smooth={true} offset={-50} duration={500}>
            Get LaunchSUV.ke Today
            </Link>
        </div>
        <p className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text mt-3 text-lg text-center ">
       Launched on May 23rd 2024
        </p>
      </div>
    );
  };
  
  export default HeroSection;
  