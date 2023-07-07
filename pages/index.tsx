import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { FaReact } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandPython,
} from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
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
            <FaReact />
            <TbBrandNextjs />
            <RiJavascriptLine />
            <TbBrandTypescript />
            <TbBrandPython />
          </div>
          <div className="flex flex-row justify-start items-center space-x-2 pt-3">
            <div className="px-3 py-1.5 border border-sky-800/50 ring-0 shadow-md cursor-pointer rounded-lg hover:bg-sky-500/70 hover:text-white hover:border-gray-300 transition duration-300">
              Works
            </div>
            <div className="">More Info..</div>
          </div>
        </div>

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
