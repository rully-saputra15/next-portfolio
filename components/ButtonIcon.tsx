import { FC } from "react";

type ButtonIconProps = {
  icon: JSX.Element;
  handleClick?: () => void;
};

const ButtonIcon: FC<ButtonIconProps> = ({ icon, handleClick }) => {
  return (
    <button
      className="px-3 py-1.5 outline outline-[#36454F] text-white ring-0 shadow-md rounded-lg 
    bg-[#36454F] hover:text-[#36454F] hover:bg-white hover:outline-[#36454F]
    transition ease-in duration-300 hover:scale-105"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
