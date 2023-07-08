import {
  animateFadeIn,
  initialFadeIn,
  transitionFadeIn,
} from "@/helpers/animation";
import { motion } from "framer-motion";
import { FC } from "react";

type TitleProps = {
  label: string;
};

const Title: FC<TitleProps> = ({ label }) => {
  return (
    <motion.span
      initial={initialFadeIn}
      animate={animateFadeIn}
      transition={transitionFadeIn}
      className="font-bold underline underline-offset-8 text-2xl"
    >
      {label}
    </motion.span>
  );
};

export default Title;
