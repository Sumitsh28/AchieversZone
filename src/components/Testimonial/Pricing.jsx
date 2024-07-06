import { useState } from "react";
import { FcInfo } from "react-icons/fc";
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
      AllPrice: 1499,
      SinglePrice: 699,
      AllPriceSix: 6999,
      AllPriceSixCross: 8994,
      link: "https://forms.gle/pLyjwS62eBRRSSdA6",
    },
    {
      name: "JEE Mains / NEET",
      AllPrice: 1999,
      SinglePrice: 899,
      AllPriceSix: 9999,
      AllPriceSixCross: 11994,
      link: "https://forms.gle/oWK5WMqhTQPvgWJM7",
    },
    {
      name: "JEE Advanced",
      AllPrice: 2999,
      SinglePrice: 1299,
      AllPriceSix: 15999,
      AllPriceSixCross: 17994,
      link: "https://forms.gle/YoZpTvr18wEQut119",
    },
  ];

  return (
    <div className="py-10 md:px-14 p-4 max-w-screen-2xl mx-auto" id="pricing">
      <div className="text-center">
        <h2
          className="md:text-5xl text-2xl font-extrabold text-primary mb-2"
          data-aos="fade-up"
        >
          Here are all our plans
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
    </div>
  );
};

export default Pricing;
