import { Box } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  url: string;
  name: string;
};

const Language = ({ directionLeft, url, name }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 0.5, delay: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={url}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24 filter group-hover:grayscale transition duration-500 ease-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white h-18 w-18 md:w-24 md:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm text-center md:text-lg font-bold text-black opacity-100">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Language;
