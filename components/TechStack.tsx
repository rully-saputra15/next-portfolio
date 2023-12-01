import { memo } from "react";
import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import {
  TbBrandDocker,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTypescript,
} from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";

import {
  animateFadeIn,
  initialFadeIn,
  transitionFadeIn,
} from "@/helpers/animation";

import HoverComponent from "./HoverComponent";

const TechStack = () => {
  return (
    <motion.div
      initial={initialFadeIn}
      animate={animateFadeIn}
      transition={transitionFadeIn}
      className="flex flex-row justify-start items-center text-3xl space-x-2"
    >
      <HoverComponent>
        <FaReact />
      </HoverComponent>
      <HoverComponent>
        <TbBrandNextjs />
      </HoverComponent>
      <HoverComponent>
        <RiJavascriptLine />
      </HoverComponent>
      <HoverComponent>
        <TbBrandTypescript />
      </HoverComponent>
      <HoverComponent>
        <TbBrandPython />
      </HoverComponent>
      <HoverComponent>
        <TbBrandDocker />
      </HoverComponent>
    </motion.div>
  );
};

export default memo(TechStack);
