import HomeButton from "@/components/HomeButton";
import Title from "@/components/Title";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const WorksPage = () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-row gap-3 items-center pt-10">
          <PiSuitcaseSimpleBold className="text-2xl" />
          <Title label="Work" />
        </div>
      </div>
      <HomeButton />
    </>
  );
};

export default WorksPage;
