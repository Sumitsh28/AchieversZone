import React from "react";
import { motion } from "framer-motion";

const JoinInstaButton = () => {
  const instaLink =
    "https://www.instagram.com/achieverszone.in?igsh=N3o3YjZwNnZ2endn";

  return (
    <div className="flex flex-col items-center justify-center h-auto  p-4 mt-10">
      <div className="max-w-md w-full text-center border-2 border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Join our Instagram page for updates
        </h2>
        <motion.a
          href={instaLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block px-6 py-2.5 bg-[#35AB9C] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#3771C1] hover:shadow-lg focus:bg-[#3771C1] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3771C1] active:shadow-lg transition duration-150 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on Instagram
        </motion.a>
      </div>
    </div>
  );
};

export default JoinInstaButton;
