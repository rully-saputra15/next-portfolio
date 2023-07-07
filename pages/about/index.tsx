import HomeButton from "@/components/HomeButton";
import Title from "@/components/Title";
import { BsPersonCircle } from "react-icons/bs";

const AboutPage = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-row items-center gap-2">
        <BsPersonCircle className="text-2xl" />
        <Title label="About Me" />
      </div>
      <div className="p-4 flex flex-col space-y-5 mt-4">
        <div className="font-bold text-2xl">
          Hello, my name is Rully Saputra!😎
        </div>
        <div>
          <span className="font-bold">
            I am a full-stack Javascript Instructor at Hacktiv8, specializing in
            software engineering with over two years of hands-on experience.
          </span>
          <span className="font-light text-gray-700">
            {" "}
            In addition to my expertise in web development, I also have
            experience in creating Hybrid mobile apps.
          </span>
        </div>
        <div>
          <span className="font-bold">
            One of my most significant achievements was earning a promotion to
            the role of senior software engineer within the first year of my
            professional career.
          </span>
          <span className="font-light text-gray-700">
            {" "}
            During this time, I created the program responsible for generating
            comprehensive reports. These reports served as the company&apos;s
            official documentation submitted to the Minister of Environment and
            Forestry, showcasing our commitment and responsibility.
          </span>
        </div>
        <div className="font-light text-gray-700">
          Fuelled by my deep passion for programming and system design, I am
          driven to create large-scale systems that leave a lasting impact. My
          ultimate ambition is to develop applications on par with the likes of
          Instagram, YouTube, TikTok, and other prominent platforms. Given the
          rapid pace of the IT industry, I remain agile and stay hungry for new
          technologies and opportunities. I am always seeking to expand my
          knowledge base and stay at the forefront of emerging trends. My
          dedication to continuous learning ensures that I deliver precise
          solutions and remain adaptable in this ever-evolving field.
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default AboutPage;
