import { FC } from "react";

type ButtonIconProps = {
  icon: JSX.Element;
  handleClick?: () => void;
};

const ButtonIcon: FC<ButtonIconProps> = ({ icon, handleClick }) => {
  return (
    <button
      className="px-3 py-1.5 border border-sky-800/50 ring-0 shadow-md rounded-lg 
    hover:bg-sky-600/90 hover:text-white hover:border-gray-100
    transition ease-in duration-300 hover:scale-105"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
