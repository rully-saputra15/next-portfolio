import { FC } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={`p-4 h-screen ${inter.className}`}>{children}</div>;
};

export default Layout;
