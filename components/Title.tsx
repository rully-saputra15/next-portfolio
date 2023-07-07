import { FC } from "react";

type TitleProps = {
  label: string;
};

const Title: FC<TitleProps> = ({ label }) => {
  return (
    <span className="font-bold underline underline-offset-8 text-2xl">
      {label}
    </span>
  );
};

export default Title;
