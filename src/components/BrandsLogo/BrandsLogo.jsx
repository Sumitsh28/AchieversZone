import React from "react";

const BrandsLogo = () => {
  return (
    <>
      <div className="container sm:mt-0">
        <h1 className="text-center text-xl mb-10 font-semibold mt-10">
          Your Pathway to Success! Crack it all with us
        </h1>
        <div className="flex flex-row items-center justify-center gap-5 lg:gap-36 md:text-[50px] font-bold text-[#8e8e8e] mb-10 ">
          <div className="hover:text-[#35AB9C]">BOARDS</div>
          <div className="hover:text-[#35AB9C]">JEE MAINS</div>
          <div className="hover:text-[#35AB9C]">JEE ADVANCED</div>
          <div className="hover:text-[#35AB9C]">NEET</div>
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;
