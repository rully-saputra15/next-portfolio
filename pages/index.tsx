import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import MainButton from "../components/MainButton";
import HoverComponent from "../components/HoverComponent";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { handleOpenNewTab } from "@/helpers/utils";
import { motion } from "framer-motion";
import {
  animateFadeIn,
  initialFadeIn,
  transitionFadeIn,
} from "@/helpers/animation";
import { event } from "nextjs-google-analytics";
import Head from "next/head";
import ButtonIcon from "@/components/ButtonIcon";
import {
  metaHomeDescription,
  metaKeywords,
  metaMentorDescription,
} from "@/helpers/constants";
import TechStack from "@/components/TechStack";

export default function Home() {
  const router = useRouter();

  const handleChangePage = useCallback(
    (page: string) => {
      router.push("/" + page);
    },
    [router]
  );

  const handleOpenBlog = useCallback(() => {
    event("open_my_blog", {
      category: "open-medium",
    });
    window.open("https://medium.com/@rully.saputra4", "_blank");
  }, []);

  const handleOpenResume = useCallback(() => {
    event("open_resume", {
      category: "Open Resume",
      label: "Open Resume",
    });

    handleOpenNewTab(
      "https://drive.google.com/file/d/1WEd-Y5on2TVz1Eoczsp2BtPa6-HkmeFR/view?usp=sharing"
    );
  }, []);

  const handleOpenSocialMedia = useCallback(
    (socialMedia: string, url: string) => {
      event(`open_${socialMedia}`, {
        category: `Open ${socialMedia}`,
        label: socialMedia,
      });
      handleOpenNewTab(url);
    },
    []
  );

  const CTASection = () => {
    return (
      <motion.div
        initial={initialFadeIn}
        animate={animateFadeIn}
        transition={transitionFadeIn}
        className="flex flex-row justify-start items-center space-x-2 pt-3"
      >
        <MainButton label="Work" handleClick={() => handleChangePage("work")} />
        <MainButton label="My Blog" handleClick={handleOpenBlog} />
        <MainButton
          label="About Me.."
          handleClick={() => handleChangePage("about")}
        />
        <ButtonIcon
          icon={<FiMail className="text-2xl" />}
          handleClick={() =>
            handleOpenNewTab(
              "mailto:rullysaputra.business@gmail.com?subject=Hi Rully!"
            )
          }
        />
      </motion.div>
    );
  };

  return (
    <main className="flex flex-col h-full relative">
      <Head>
        <title>Rully Saputra</title>
        <meta name="description" content={metaHomeDescription} key="desc" />
        <meta name="description" content={metaMentorDescription} key="desc" />
        <meta name="keyword" content={metaKeywords} />
      </Head>
      <article className="flex flex-row flex-wrap items-center justify-start h-full">
        <div className="flex flex-col justify-start items-start space-y-2">
          <motion.h1
            initial={initialFadeIn}
            animate={animateFadeIn}
            transition={transitionFadeIn}
            className="text-lg pr-14 animate-fade-up"
          >
            <span className="font-light text-gray-500">Hello,</span>
            <span className="font-bold text-gray-700">
              {" "}
              I&apos;m Rully Saputra
            </span>
            <span className="font-light text-gray-500 main-title">
              , a seasoned software sorcerer who channels my expertise towards
              the ethereal artistry of front-end mastery.
            </span>
          </motion.h1>
          <TechStack />
          <CTASection />
        </div>

        <motion.div
          initial={initialFadeIn}
          animate={animateFadeIn}
          transition={transitionFadeIn}
          className="absolute flex flex-col gap-2 bottom-20 right-3 text-2xl"
        >
          <HoverComponent>
            <AiOutlineGithub
              onClick={() =>
                handleOpenSocialMedia(
                  "github",
                  "https://github.com/rully-saputra15"
                )
              }
            />
          </HoverComponent>
          <HoverComponent>
            <AiOutlineLinkedin
              onClick={() =>
                handleOpenSocialMedia(
                  "linkedin",
                  "https://www.linkedin.com/in/rully-saputra-7554a7138/"
                )
              }
            />
          </HoverComponent>
          <HoverComponent>
            <AiOutlineInstagram
              onClick={() =>
                handleOpenSocialMedia(
                  "instagram",
                  "https://www.instagram.com/rully.saputra15"
                )
              }
            />
          </HoverComponent>
        </motion.div>
        <div className="absolute bottom-8 right-[1.4rem] w-0.5 h-10 bg-gray-600 -z-10"></div>
      </article>
      <motion.div
        initial={initialFadeIn}
        animate={animateFadeIn}
        transition={transitionFadeIn}
        className="absolute top-5 right-5 outline outline-offset-2 outline-2 outline-[#36454F] text-gray-600 px-3 cursor-pointer shadow-md py-1.5 rounded-md transition ease-in duration-300 font-bold hover:bg-[#36454F] hover:text-white"
        onClick={handleOpenResume}
      >
        Resume
      </motion.div>
    </main>
  );
}
