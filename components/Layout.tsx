import { FC } from "react";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="p-4 bg-sky-50/50 h-screen">{children}</div>;
};

export default Layout;
