import { FC } from "react";
import Image, { StaticImageData } from "next/image";

type WorkCardProps = {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  techStack: JSX.Element | JSX.Element[];
};

const WorkCard: FC<WorkCardProps> = ({
  title,
  description,
  imgSrc,
  techStack,
}) => {
  return (
    <div className="flex flex-col justify-start">
      <div className="group border border-gray-100 rounded-lg relative shadow-lg transition transform duration-300 hover:scale-105">
        <Image
          src={imgSrc}
          className="w-80 h-60 aspect-auto rounded-lg"
          alt="todolist"
        />
        <div className="absolute hidden group-hover:flex group-hover:transition flex-col justify-center items-center bottom-0 rounded-b-lg bg-gray-300/50 w-full h-full px-1 rounded-lg">
          <div className="font-bold text-xl">{title}</div>
          <div className="font-light text-sm">{description}</div>
          <div className="flex flex-row text-xl gap-2">{techStack}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
