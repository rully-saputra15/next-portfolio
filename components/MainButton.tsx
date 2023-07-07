import { FC } from "react";

type MainButtonProps = {
  label: string;
  handleClick?: () => void;
};

const MainButton: FC<MainButtonProps> = ({ label, handleClick }) => {
  return (
    <div
      className="px-3 py-1.5 border border-sky-800/50 ring-0 shadow-md cursor-pointer rounded-lg hover:bg-sky-600/90 hover:text-white hover:border-gray-100 transition ease-in duration-300 hover:scale-105"
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default MainButton;
