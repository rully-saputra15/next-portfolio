import { FC } from "react";

type MainButtonProps = {
  label: string;
  handleClick?: () => void;
};

const MainButton: FC<MainButtonProps> = ({ label, handleClick }) => {
  return (
    <div
      className="px-3 py-1.5 outline outline-[#36454F] ring-0 shadow-md cursor-pointer rounded-lg hover:bg-[#36454F] hover:text-white hover:outline-[#36454F] transition ease-in duration-300 hover:scale-105"
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default MainButton;
