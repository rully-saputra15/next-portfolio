import { FC } from "react";

type HoverComponentProps = {
  children: JSX.Element | JSX.Element[];
};

const HoverComponent: FC<HoverComponentProps> = ({ children }) => {
  return (
    <div className="hover:scale-125 duration-300 transition ease-in">
      {children}
    </div>
  );
};

export default HoverComponent;
