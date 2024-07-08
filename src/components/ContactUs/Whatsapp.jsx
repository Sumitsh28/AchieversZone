import React from "react";
import { motion } from "framer-motion";

const JoinWhatsappButton = () => {
  const whatsappLink = "https://whatsapp.com/channel/0029Vaj1UGnBlHpYDaqKmD0k";

  return (
    <div className="flex flex-col items-center justify-center h-auto  p-4 mt-10">
      <div className="max-w-md w-full text-center border-2 border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Join our WhatsApp channel for updates
        </h2>
        <motion.a
          href={whatsappLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block px-6 py-2.5 bg-[#35AB9C] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#3771C1] hover:shadow-lg focus:bg-[#3771C1] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3771C1] active:shadow-lg transition duration-150 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join WhatsApp Channel
        </motion.a>
      </div>
    </div>
  );
};

export default JoinWhatsappButton;
