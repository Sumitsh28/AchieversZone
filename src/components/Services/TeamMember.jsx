import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const TeamMember = ({ name, role, image, clg }) => {
  const [isToggled, setIsToggled] = useState(false);
  const cardRef = useRef(null);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsToggled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      onClick={handleToggle}
      ref={cardRef}
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <motion.div
        className={`absolute inset-0 bg-primary bg-opacity-75 flex flex-col items-center justify-center text-white gap-10 ${
          isToggled ? "opacity-1" : "opacity-0"
        }`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        animate={{ opacity: isToggled ? 1 : 0 }}
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-lg">{clg}</p>
        </div>
        <p className="text-3xl font-extralight">{role}</p>
      </motion.div>
    </motion.div>
  );
};

export default TeamMember;
