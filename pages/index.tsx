import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  handleOpenBlog,
  handleOpenNewTab,
  handleOpenResume,
  handleOpenSocialMedia,
} from "@/helpers/utils";
import { m } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

import MainButton from "../components/MainButton";
import HoverComponent from "../components/HoverComponent";

import {
  animateFadeIn,
  initialFadeIn,
  transitionFadeIn,
} from "@/helpers/animation";
import ButtonIcon from "@/components/ButtonIcon";
import {
  linkedinUrl,
  metaHomeDescription,
  metaKeywords,
  metaMentorDescription,
} from "@/helpers/constants";
import TechStack from "@/components/TechStack";

const SocialMediaSection = () => (
  <section className="flex flex-row gap-3 absolute top-7">
    <HoverComponent>
      <AiOutlineGithub
        className="text-xl"
        onClick={() =>
          handleOpenSocialMedia("github", "https://github.com/rully-saputra15")
        }
      />
    </HoverComponent>
    <HoverComponent>
      <AiOutlineLinkedin
        className="text-xl"
        onClick={() => handleOpenSocialMedia("linkedin", linkedinUrl)}
      />
    </HoverComponent>
    <HoverComponent>
      <AiOutlineInstagram
        className="text-xl"
        onClick={() =>
          handleOpenSocialMedia(
            "instagram",
            "https://www.instagram.com/rully.saputra15"
          )
        }
      />
    </HoverComponent>
    <HoverComponent>
      <FaTiktok
        className="text-xl"
        onClick={() =>
          handleOpenSocialMedia(
            "tiktok",
            "https://www.tiktok.com/@rullysaputra5"
          )
        }
      />
    </HoverComponent>
  </section>
);

export default function Home() {
  const router = useRouter();

  const handleChangePage = useCallback(
    (page: string) => {
      router.push("/" + page);
    },
    [router]
  );

  const CTASection = () => {
    return (
      <m.div
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
      </m.div>
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
          <SocialMediaSection />
          <m.h1
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
          </m.h1>
          <TechStack />
          <CTASection />
        </div>
      </article>
      <m.div
        initial={initialFadeIn}
        animate={animateFadeIn}
        transition={transitionFadeIn}
        className="absolute top-5 right-5 outline outline-offset-2 outline-2 outline-[#36454F] text-gray-600 px-3 cursor-pointer shadow-md py-1.5 rounded-md transition ease-in duration-300 font-bold hover:bg-[#36454F] hover:text-white"
        onClick={handleOpenResume}
      >
        Resume
      </m.div>
    </main>
  );
}
