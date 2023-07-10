import Image from "next/image";
import { SiChakraui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoLogoLaravel } from "react-icons/io5";

import HomeButton from "@/components/HomeButton";
import Title from "@/components/Title";

import todoList from "@/assets/todo_list_app.png";
import eBazaar from "@/assets/ebazaar.JPG";

import WorkCard from "@/components/WorkCard";

const WorksPage = () => {
  return (
    <>
      <div className="relative flex flex-col justify-start space-y-3">
        <div className="flex flex-row gap-3 items-center pt-10">
          <PiSuitcaseSimpleBold className="text-2xl" />
          <Title label="Work" />
        </div>
        <span className="font-medium text-xl">Personal Project</span>
        <div className="flex flex-row flex-wrap justify-start gap-3">
          <WorkCard
            title="TodoList App"
            description="A interesting todo list app!"
            imgSrc={todoList}
            techStack={
              <>
                <FaReact />
                <SiChakraui />
              </>
            }
          />

          <WorkCard
            title="E-Bazaar"
            description="Grab your food now!"
            imgSrc={eBazaar}
            techStack={
              <>
                <IoLogoLaravel />
              </>
            }
          />
        </div>
      </div>
      <HomeButton />
    </>
  );
};

export default WorksPage;
