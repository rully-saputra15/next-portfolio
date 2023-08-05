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
    <section>
      <div className="relative flex flex-col justify-start pb-5">
        <div className="flex flex-row gap-3 items-center pt-10 pb-5">
          <PiSuitcaseSimpleBold className="text-2xl" />
          <Title label="Work" />
        </div>
        <h1 className="font-medium text-xl">Professional</h1>
        <h2 className="font-light text-xs pb-3">
          All the professional&apos;s project used Gitlab CI
        </h2>
        <motion.div
          initial={initialFadeIn}
          animate={animateFadeIn}
          transition={transitionFadeIn}
          className="flex flex-col flex-wrap justify-start gap-3"
        >
          {professional.map((work: Work) => (
            <WorkCard
              key={work.title}
              title={work.title}
              description={work.description}
              role={work.role}
              url={work.url}
              techStack={work.techStack}
            />
          ))}
        </motion.div>
        <h3 className="font-medium text-xl py-4">Personal</h3>
        <motion.div
          initial={initialFadeIn}
          animate={animateFadeIn}
          transition={transitionFadeIn}
          className="flex flex-col flex-wrap justify-start gap-3"
        >
          {personal.map((work: Work) => (
            <WorkCard
              key={work.title}
              title={work.title}
              description={work.description}
              role={work.role}
              url={work.url}
              techStack={work.techStack}
            />
          ))}
        </motion.div>
        <h3 className="font-medium text-xl py-4">Publication</h3>
        <motion.div
          initial={initialFadeIn}
          animate={animateFadeIn}
          transition={transitionFadeIn}
          className="flex flex-col flex-wrap justify-start gap-3"
        >
          {publications.map((work: Work) => (
            <WorkCard
              key={work.title}
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
    </section>
  );
};

export default WorksPage;
