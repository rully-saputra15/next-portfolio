import { FC, PropsWithChildren } from "react";

const HoverComponent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="hover:scale-125 duration-300 transition ease-in">
      {children}
    </div>
  );
};

export default HoverComponent;
