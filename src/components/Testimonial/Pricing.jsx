import { useState } from "react";
import { IoPeople } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BsBroadcast } from "react-icons/bs";

import { motion } from "framer-motion";

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Pricing = () => {
  const [isSingle, setisSingle] = useState(false);

  const packages = [
    {
      name: "Boards",
      AllPrice: 799,
      AllPriceCross: 999,
      SinglePrice: 299,
      AllPriceSix: 4500,
      AllPriceSixCross: 5999,
      link: "https://forms.gle/pLyjwS62eBRRSSdA6",
    },
    {
      name: "JEE Mains / NEET",
      AllPrice: 899,
      AllPriceCross: 1199,
      SinglePrice: 399,
      AllPriceSix: 5000,
      AllPriceSixCross: 6999,
      link: "https://forms.gle/oWK5WMqhTQPvgWJM7",
    },
    {
      name: "JEE Advanced",
      AllPrice: 999,
      AllPriceCross: 1499,
      SinglePrice: 499,
      AllPriceSix: 5500,
      AllPriceSixCross: 8999,
      link: "https://forms.gle/YoZpTvr18wEQut119",
    },
  ];

  const features = [
    {
      name: "Mentoring",
      desc: "One to One mentoring for a better future",
      img: <IoPeople className="text-2xl text-violet-600" />,
    },
    {
      name: "Top Educators",
      desc: "Learn from best teachers from IITs",
      img: <FaStar className="text-2xl text-yellow-500" />,
    },
    {
      name: "Live classes",
      desc: "Interactive classes with proper test series and doubt sessions",
      img: <BsBroadcast className="text-2xl text-red-500" />,
    },
  ];

  return (
    <div className="py-10 md:px-14 p-4 max-w-screen-2xl mx-auto" id="pricing">
      <div className="text-center flex flex-col items-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mb-5 md:w-11/12 "
        >
          {features.map((pkg, index) => (
            <div
              key={index}
              className="relative border py-5 rounded-lg shadow-3xl flex flex-col items-center justify-center gap-5"
            >
              <div className="flex flex-row items-center justify-center gap-5">
                <div className="flex items-center justify-center border-2 rounded-full p-1">
                  {pkg.img}
                </div>

                <h3 className="text-xl font-bold text-center text-primary">
                  {pkg.name}
                </h3>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-600">
                {pkg.desc}
              </h3>
            </div>
          ))}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative bg-white rounded-lg shadow-lg p-6 m-4 overflow-hidden transition-all duration-300 mb-20"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 hover:from-yellow-300 hover:to-red-400 opacity-0 transition-opacity duration-300 rounded-lg" />
          <div className="relative">
            <p className="text-red-500 font-bold text-3xl">
              Demo Classes will be taken on 15, 16 July 2024.
              <br />
              Classes will start from 1 Aug, 2024
            </p>
          </div>
        </motion.div>
        <h2
          className="md:text-5xl text-2xl font-extrabold text-primary mb-2"
          data-aos="fade-up"
        >
          Here are all plans of our online courses
        </h2>
        <p className="text-gray-600 md:w-1/3 mx-auto" data-aos="fade-up">
          Expert guidance at nominal price.
        </p>

        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">PCM / PCB</span>
            <div className="w-14 h-6 transition duration-200 bg-gray-300 ease-in-out rounded-full">
              <div
                className={`w-6 h-6 transition duration-200 ease-in-out rounded-full ${
                  isSingle ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Single Subject</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isSingle}
            onChange={() => setisSingle(!isSingle)}
          />
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>

            {!isSingle && (
              <p className="text-center text-gray-500 text-4xl line-through mb-5 mt-5 ">
                ₹{pkg.AllPriceCross}
              </p>
            )}

            <p className="mt-5 text-center text-secondary text-4xl font-bold mb-5">
              {isSingle ? `₹${pkg.SinglePrice}` : `₹${pkg.AllPrice}`}
              <span className="text-base text-tertiary font-medium">
                /{isSingle ? "month" : "month"}
              </span>
            </p>
            {!isSingle && (
              <>
                <div className="flex items-center justify-center my-4">
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <span className="text-base text-tertiary font-medium mx-4">
                    or
                  </span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>

                <p className="text-center text-gray-500 text-4xl line-through mb-5 mt-5 ">
                  ₹{pkg.AllPriceSixCross}
                </p>

                <p className="text-center text-secondary text-4xl font-bold">
                  ₹{pkg.AllPriceSix}
                  <span className="text-base text-tertiary font-medium">
                    for 6 months
                  </span>
                </p>
              </>
            )}

            <div
              className="w-full mx-auto flex items-center justify-center mt-5"
              onClick={() => window.open(pkg.link, "_blank")}
            >
              <button className="mt-6 px-10 text-secondary py-2 bg-[#35AB9C] text-white border border-secondary hover:bg-[#2e9587] font-semibold rounded-lg">
                Enroll Now
              </button>
            </div>

            <div className="absolute -top-4 right-0 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-md shadow-md">
              Offer valid till 5 Aug
            </div>
          </div>
        ))}
      </motion.div>
      <div className="flex flex-col items-center justify-center mt-5">
        <h1
          className="text-red-500 mx-auto font-bold text-2xl"
          data-aos="fade-up"
        >
          *Prices may be decreased if we got good enough number of students (we
          will try to keep it minimum)
        </h1>
      </div>
    </div>
  );
};

export default Pricing;

// Prices whatsapp se lene h
