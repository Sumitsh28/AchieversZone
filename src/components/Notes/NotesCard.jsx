import React from "react";
import { motion } from "framer-motion";

const NotesCard = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <motion.div
        className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <img src={img} alt={name} className="w-full h-full object-fill" />
        <motion.div
          className="absolute inset-0 bg-primary bg-opacity-75 flex flex-col items-center justify-center text-white opacity-0 gap-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex flex-col items-center justify-center border px-3 py-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
            View
          </div>
        </motion.div>
      </motion.div>
      <h1 className="text-black dark:text-white text-xl font-semibold">
        {name}
      </h1>
    </div>
  );
};

export default NotesCard;
