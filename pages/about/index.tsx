import HomeButton from "@/components/HomeButton";
import Title from "@/components/Title";
import { BsPersonCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";
import {
  initialFadeIn,
  animateFadeIn,
  transitionFadeIn,
} from "@/helpers/animation";
import Head from "next/head";
import MainButton from "@/components/MainButton";
import { handleOpenNewTab } from "@/helpers/utils";
import { linkedinUrl } from "@/helpers/constants";

const AboutPage = () => {
  const handleOpenMore = () => {
    sendGAEvent("event", "buttonClicked", { value: "open_know_more_linkedin" });
    handleOpenNewTab(linkedinUrl);
  };
  return (
    <section>
      <Head>
        <title>Rully Saputra - About</title>
      </Head>
      <motion.section
        initial={initialFadeIn}
        animate={animateFadeIn}
        transition={transitionFadeIn}
        className="pt-10"
      >
        <div className="flex flex-row items-center gap-2">
          <BsPersonCircle className="text-2xl" />
          <Title label="About Me" />
        </div>
        <article className="p-4 flex flex-col space-y-5 mt-4">
          <div className="font-bold text-2xl">
            Hello, my name is Rully Saputra!😎
          </div>
          <span className="font-bold">
            I am a software engineer at Traveloka, specializing in software
            engineering with over three years of hands-on experience. I am also
            a mentor for people who want to learn about software engineering.
          </span>
          <div>
            <span className="font-bold">
              One of my most significant achievements was earning a promotion to
              the role of senior software engineer within the first year of my
              professional career.
            </span>
            <span className="font-light text-gray-700">
              {" "}
              During this time, I created the program responsible for generating
              comprehensive reports. These reports served as the company&apos;s
              official documentation submitted to the Minister of Environment
              and Forestry, showcasing our commitment and responsibility.
            </span>
          </div>
          <div className="font-light text-gray-700">
            Fuelled by my deep passion for programming and system design, I am
            driven to create large-scale systems that leave a lasting impact.
          </div>
          <div className="flex flex-col justify-start items-start">
            <MainButton label="Know More" handleClick={handleOpenMore} />
          </div>
        </article>
      </motion.section>
      <HomeButton />
    </section>
  );
};

export default AboutPage;
