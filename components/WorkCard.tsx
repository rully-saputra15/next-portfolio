import { FC, useCallback } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { event } from "nextjs-google-analytics";

type WorkCardProps = {
  title: string;
  description: string;
  role: string;
  url?: string;
  techStack: JSX.Element | JSX.Element[];
};

const WorkCard: FC<WorkCardProps> = ({
  title,
  description,
  url,
  role,
  techStack,
}) => {
  const handleOpenUrl = useCallback(() => {
    event("my-work", {
      label: title,
    });
    window.open(url, "_blank");
  }, [url]);

  return (
    <div className="flex flex-col justify-start flex-1 border border-gray-100 rounded-lg relative shadow-lg transition transform duration-500 scale-95 hover:scale-100 box-border p-3 space-y-2 bg-white">
      <div className="flex flex-row justify-between">
        <span className="text-sky-700 font-bold text-lg">{title}</span>
        {url && <BiLinkExternal className="text-lg" onClick={handleOpenUrl} />}
      </div>
      <span className="h-1 border-b-2 border-gray-500"></span>
      <span className="text-gray-700 font-light text-sm">{description}</span>
      <span className="text-gray-700 font-medium text-sm">{role}</span>
      <div className="flex flex-row text-xl gap-2">{techStack}</div>
      {/* <Image
      src={imgSrc}
      className="w-80 h-60 aspect-auto rounded-lg"
      alt="todolist"
    />
    <div className="absolute hidden group-hover:flex group-hover:transition flex-col justify-center items-center bottom-0 rounded-b-lg bg-gray-300/50 w-full h-full px-1 rounded-lg">
      <div className="font-bold text-xl">{title}</div>
      <div className="font-light text-sm">{description}</div>
      <div className="flex flex-row text-xl gap-2">{techStack}</div>
    </div> */}
    </div>
  );
};

export default WorkCard;
