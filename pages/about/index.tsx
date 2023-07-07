import HomeButton from "@/components/HomeButton";
import Title from "@/components/Title";
import { BsPersonCircle } from "react-icons/bs";

const AboutPage = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-row items-center gap-2">
        <BsPersonCircle className="text-2xl" />
        <Title label="About Me" />
      </div>
      <HomeButton />
    </div>
  );
};

export default AboutPage;
