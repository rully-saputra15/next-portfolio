import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { motion } from "framer-motion";
import HomeButton from "@/components/HomeButton";
import Title from "@/components/Title";

import WorkCard from "@/components/WorkCard";
import { personal, professional, publications } from "@/data/work";
import { Work } from "../../interfaces";
import {
  animateFadeIn,
  initialFadeIn,
  transitionFadeIn,
} from "@/helpers/animation";

const WorksPage = () => {
  return (
    <>
      <div className="relative flex flex-col justify-start pb-5">
        <div className="flex flex-row gap-3 items-center pt-10 pb-5">
          <PiSuitcaseSimpleBold className="text-2xl" />
          <Title label="Work" />
        </div>
        <span className="font-medium text-xl">Professional</span>
        <span className="font-light text-xs pb-3">
          All the professional&apos;s projects use Gitlab CI
        </span>
        <motion.div
          initial={initialFadeIn}
          animate={animateFadeIn}
          transition={transitionFadeIn}
          className="flex flex-col flex-wrap justify-start gap-3"
        >
          {professional.map((work: Work) => (
            <WorkCard
              title={work.title}
              description={work.description}
              role={work.role}
              url={work.url}
              techStack={work.techStack}
            />
          ))}
        </motion.div>
        <span className="font-medium text-xl py-4">Personal</span>
        <motion.div
          initial={initialFadeIn}
          animate={animateFadeIn}
          transition={transitionFadeIn}
          className="flex flex-col flex-wrap justify-start gap-3"
        >
          {personal.map((work: Work) => (
            <WorkCard
              title={work.title}
              description={work.description}
              role={work.role}
              url={work.url}
              techStack={work.techStack}
            />
          ))}
        </motion.div>
        <span className="font-medium text-xl py-4">Publication</span>
        <motion.div
          initial={initialFadeIn}
          animate={animateFadeIn}
          transition={transitionFadeIn}
          className="flex flex-col flex-wrap justify-start gap-3"
        >
          {publications.map((work: Work) => (
            <WorkCard
              title={work.title}
              description={work.description}
              role={work.role}
              url={work.url}
              techStack={work.techStack}
            />
          ))}
        </motion.div>
      </div>
      <HomeButton />
    </>
  );
};

export default WorksPage;
