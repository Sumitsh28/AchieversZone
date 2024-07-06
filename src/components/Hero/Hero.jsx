import React from "react";
import full_Logo from "../../assets/website/logo.png";

const Hero = () => {
  return (
    <>
      <div className="dark:bg-gray-950 dark:text-white duration-300 ">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {/* Image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <img
                src={full_Logo}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px]"
              />
              <div
                data-aos="slide-right"
                className="absolute bottom-6 -right-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
              >
                <p className="text-gray-500 text-sm flex flex-col items-center">
                  By Team of
                </p>
                <h1 className="font-bold flex flex-col items-center">
                  IITians
                </h1>
              </div>
            </div>

            {/* Text section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold"
                style={{ lineHeight: 1.2 }}
              >
                Enroll Yourself in the online courses of
                <span className="text-primary"> Achiever's</span>
                <span className="text-[#35AB9C]"> Zone</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Unlock Your Potential with us. Join our premier online coaching
                to excel in your competitive exams. With expert guidance,
                personalized study plans, and a proven track record, we are
                dedicated to helping you achieve your academic dreams. Start
                your journey to success today!
                <br />
                <span className="text-red-600 font-bold">
                  (Only for Class 11th & 12th English Medium)
                </span>
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
