import logo from "../assets/logo.png";
import chocolate2 from "../assets/chocolate2.png";
import PopupForm from "./PopupForm";
import { useContext, useState } from "react";
import { FormDataContext } from "../context/FormDataContext";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WishesTemplate = () => {
    const {name} = useContext(FormDataContext);
    const [size, setSize] = useState(200);
    const [displayName,setDisplayName] = useState(false);
  
  return (
    <div className="flex justify-center items-center h-screen relative">
      <PopupForm />
      <div className="bg-gradient-to-t from-[#204A84] to-[#14214D] h-screen w-full p-4 relative">
    
        <div className="flex justify-start">
          <img
            src={logo}
            alt="SunFeast_logo"
            className="w-16 md:w-24 lg:w-32"
          />
        </div>

        {
          displayName ? (
            <div className="flex flex-col justify-center items-center h-[80vh] px-4 text-center space-y-6 relative -top-20">
      
            <motion.div
              className="relative flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Sparkles className="absolute -left-12 text-blue-500 animate-pulse size-6 md:size-8 lg:size-10" />
              <Sparkles className="absolute -left-20 text-blue-300 animate-ping size-4 md:size-6 lg:size-8" />
              <motion.p
                className="text-white font-extrabold text-2xl md:text-5xl lg:text-6xl -rotate-6 drop-shadow-[-5px_-2px_0px_#2B6ADB]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                RAISE
              </motion.p>
              <Sparkles className="absolute -right-12 text-blue-500 animate-pulse size-6 md:size-8 lg:size-10" />
              <Sparkles className="absolute -right-20 text-blue-300 animate-ping size-4 md:size-6 lg:size-8" />
            </motion.div>
      
            <motion.div
              className="relative flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <Sparkles className="absolute -left-12 text-pink-500 animate-pulse size-6 md:size-8 lg:size-10" />
              <Sparkles className="absolute -left-20 text-pink-300 animate-ping size-4 md:size-6 lg:size-8" />
              <motion.p
                className="text-white font-extrabold text-2xl md:text-5xl lg:text-6xl -rotate-6 drop-shadow-[-5px_-2px_0px_#E9408D]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                THE BAR
              </motion.p>
              <Sparkles className="absolute -right-12 text-pink-500 animate-pulse size-6 md:size-8 lg:size-10" />
              <Sparkles className="absolute -right-20 text-pink-300 animate-ping size-4 md:size-6 lg:size-8" />
            </motion.div>
      
            <motion.div
              className="relative flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Sparkles className="absolute -left-12 text-blue-500 animate-pulse size-6 md:size-8 lg:size-10" />
              <Sparkles className="absolute -left-20 text-blue-300 animate-ping size-4 md:size-6 lg:size-8" />
              <motion.p
                className="text-white font-extrabold text-2xl md:text-5xl lg:text-6xl -rotate-6 drop-shadow-[-5px_-2px_0px_#2B6ADB]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                WITH {name}
              </motion.p>
              <Sparkles className="absolute -right-12 text-blue-500 animate-pulse size-6 md:size-8 lg:size-10" />
              <Sparkles className="absolute -right-20 text-blue-300 animate-ping size-4 md:size-6 lg:size-8" />
            </motion.div>
      
          </div>
      
          ) : (
            <div className="flex flex-col justify-center items-center h-[80vh] px-4 text-center">
          <div className="text-white font-bold text-lg md:text-2xl lg:text-5xl leading-tight text-center">
            <p className="bg-gradient-to-r from-[#FFD700] to-[#FF69B4] bg-clip-text text-transparent drop-shadow-[0px_0px_12px_rgba(255,215,0,0.8)] animate-pulse">
              Will you be My
            </p>
            <p className="md:indent-20 bg-gradient-to-r from-[#FFD700] to-[#FF69B4] bg-clip-text text-transparent drop-shadow-[0px_0px_12px_rgba(255,215,0,0.8)] animate-pulse">
              Sunfeast Fantastik Valentine?
            </p>
          </div>

          <img
            src={chocolate2}
            alt="chocolate-1"
            className="drop-shadow-[0px_0px_5px_#ffffff] -rotate-6 w-48 md:w-56 lg:w-72"
          />
        </div>
          )
        }

        <div className="absolute bottom-0 left-0 w-full lg:block hidden">
          <svg
            viewBox="0 0 1440 280"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              fill="#c51465"
              fillOpacity="1"
              d="M0,100 Q720,280 1440,100 L1440,300 L0,300 Z"
            ></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full sm:hidden">
          <svg
            viewBox="0 0 1440 780"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              fill="#c51465"
              fillOpacity="1"
              d="M0,100 Q720,280 1440,100 L1440,780 L0,780 Z"
            ></path>
          </svg>
        </div>
      </div>

      {
        !displayName && (
          <div
      className="fixed top-[180px] inset-0 flex justify-center items-center"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-2xl flex flex-col justify-center items-center transition-all duration-300"
        style={{ width: size, height: size/2 }}
      >
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white px-5 py-1 rounded-lg hover:bg-green-600 cursor-pointer "
            onClick={() => setDisplayName(true)}
          >
            Yes
          </button>
          <button
            className="bg-red-500 text-white px-5 py-1 rounded-lg hover:bg-red-600 cursor-pointer"
            onClick={() => setSize(size + 20)}
          >
            No
          </button>
        </div>
      </div>
    </div>
        )
      }
    </div>
  );
};

export default WishesTemplate;
