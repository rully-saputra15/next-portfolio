import { useRouter } from "next/router";
import { BiHome } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  animateFadeIn,
  initialFadeIn,
  transitionFadeIn,
} from "@/helpers/animation";
const HomeButton = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={initialFadeIn}
      animate={animateFadeIn}
      transition={transitionFadeIn}
      className="absolute top-5 right-5 text-2xl cursor-pointer p-2 border border-gray-700 rounded-full hover:scale-110 transition duration-300 ease-in-out"
      onClick={() => router.push("/")}
    >
      <BiHome />
    </motion.div>
  );
};

export default HomeButton;
