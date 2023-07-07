import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { FaReact } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandPython,
  TbBrandDocker,
} from "react-icons/tb";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import MainButton from "../components/MainButton";
import HoverComponent from "../components/HoverComponent";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { handleOpenNewTab } from "@/helpers/utils";

export default function Home() {
  const router = useRouter();

  const handleChangePage = useCallback((page: string) => {
    router.push("/" + page);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <main className="flex flex-col h-full relative">
      {/* <Particles
        id="tsparticles"
        options={{
          particles: {
            color: {
              value: "#FF0000",
              animation: {
                enable: true,
                speed: 10,
              },
            },
            move: {
              attract: {
                enable: false,
                distance: 100,
                rotate: {
                  x: 2000,
                  y: 2000,
                },
              },
              direction: "none",
              enable: true,
              outModes: {
                default: "destroy",
              },
              path: {
                clamp: false,
                enable: true,
                delay: {
                  value: 0,
                },
                generator: "polygonPathGenerator",
                options: {
                  sides: 6,
                  turnSteps: 30,
                  angle: 30,
                },
              },
              random: false,
              speed: 3,
              straight: false,
              trail: {
                fillColor: "#000",
                length: 20,
                enable: true,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 0,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 2,
            },
          },
          background: {
            color: "#000",
          },
          fullScreen: {
            zIndex: -1,
          },
          emitters: {
            direction: "none",
            rate: {
              quantity: 1,
              delay: 0.25,
            },
            size: {
              width: 0,
              height: 0,
            },
            position: {
              x: 50,
              y: 50,
            },
          },
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      /> */}
      <div className="flex flex-row flex-wrap items-center justify-start h-full">
        <div className="flex flex-col justify-start items-start space-y-2">
          <span className="text-xl pr-14">
            <span className="font-light text-gray-500">Hello,</span>
            <span className="font-bold text-gray-700"> I'm Rully Saputra</span>
            <span className="font-light text-gray-500">
              , a software engineer that mainly focuses on front-end kinds of
              stuff.
            </span>
          </span>
          <div className="flex flex-row justify-start items-center text-3xl space-x-2">
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
          </div>
          <div className="flex flex-row justify-start items-center space-x-2 pt-3">
            <MainButton
              label="Work"
              handleClick={() => handleChangePage("work")}
            />
            <div
              className="cursor-pointer"
              onClick={() => handleChangePage("about")}
            >
              More Info..
            </div>
          </div>
        </div>

        <div
          className="absolute top-5 right-5 outline outline-offset-2 outline-2 outline-blue-700 text-gray-600 px-3 cursor-pointer shadow-md py-1.5 rounded-md transition ease-in duration-300 font-bold hover:bg-blue-700 hover:text-white hover:outline-0"
          onClick={() =>
            handleOpenNewTab(
              "https://drive.google.com/file/d/1mlTRfzwlfUKUcLzYf-a8RZHiNvNoIMDl/view?usp=sharing"
            )
          }
        >
          Resume
        </div>
        <div className="absolute flex flex-col gap-2 bottom-11 right-3 text-2xl">
          <HoverComponent>
            <AiOutlineGithub
              onClick={() =>
                handleOpenNewTab("https://github.com/rully-saputra15")
              }
            />
          </HoverComponent>
          <HoverComponent>
            <AiOutlineLinkedin
              onClick={() =>
                handleOpenNewTab(
                  "https://www.linkedin.com/in/rully-saputra-7554a7138/"
                )
              }
            />
          </HoverComponent>
          <HoverComponent>
            <AiOutlineInstagram
              onClick={() =>
                handleOpenNewTab("https://www.instagram.com/rully.saputra15/")
              }
            />
          </HoverComponent>
        </div>
        <div className="absolute bottom-0 right-[1.4rem] w-0.5 h-10 bg-gray-600 -z-10"></div>
        {/* <div className="flex flex-row justify-start items-start text-2xl">
          <div>Hello,</div>
          <div>I'm Rully Saputra</div>
          <div>
            a software engineer that mainly focuses on front-end kinds of stuff.
          </div>
        </div> */}
      </div>
    </main>
  );
}
