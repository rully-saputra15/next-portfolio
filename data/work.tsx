import { Work } from "@/interfaces";
import { FaReact } from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandFramerMotion,
  TbBrandVite,
  TbBrandPython,
  TbBrandFlutter,
  TbBrandFirebase,
} from "react-icons/tb";
import {
  SiChakraui,
  SiExpo,
  SiSemanticuireact,
  SiCodeigniter,
  SiIonic,
  SiKeras,
} from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { IoLogoLaravel } from "react-icons/io5";
import { BsFiletypeDocx, BsFiletypeXlsx, BsBootstrap } from "react-icons/bs";

export const professional: Work[] = [
  {
    id: 1,
    title: "Printerous",
    description:
      "On behalf of Agile Technica. For a Printerous B2B platform to order printing. As a front-end developer.",
    role: "Front End Dev",
    techStack: [
      <>
        <FaReact />
        <TbBrandTypescript />
        <TbBrandVite />
      </>,
    ],
  },
  {
    id: 2,
    title: "ViBi Cloud Ticketing System",
    description:
      "One of Agile Technica's clients. For ViBi Cloud's ticketing platform so the customer can easily track the ticket. As a front-end developer",
    role: "Front End Dev",
    techStack: [
      <>
        <FaReact />
        <TbBrandTypescript />
        <TbBrandPython />
        <TbBrandVite />
      </>,
    ],
  },
  {
    id: 3,
    title: "CUI Loyalty App",
    description:
      "On behalf of Agile Technica. CUI is one of the biggest distributors of paints and building materials in Semarang. Create a loyalty app for the customers. You can get it from the app and play store.",
    role: "Full Stack Dev",
    url: "https://play.google.com/store/apps/details?id=com.at.cui.customer",
    techStack: [
      <>
        <TbBrandPython />
        <FaReact />
        <TbBrandTypescript />
        <SiExpo />
      </>,
    ],
  },
  {
    id: 5,
    title: "EasyPlatform",
    description:
      "On behalf of Agile Technica for LCI company. The purpose is to create automation for generating reports such as DRKPL, Sustainability Report, and Sustainability Report Story. The report contains dynamic formulas in Excel and creates tables and paragraphs for Word.",
    role: "Full Stack Dev",
    url: "https://app.easysr.com/login",
    techStack: [
      <>
        <TbBrandPython />
        <FaReact />
        <TbBrandTypescript />
        <SiSemanticuireact />
        <BsFiletypeDocx />
        <BsFiletypeXlsx />
      </>,
    ],
  },
  {
    id: 6,
    title: "Yanto Warehouse",
    description:
      "Create a mobile app for the customer to book vehicle spare parts from Yanto's warehouse. I also create the dashboard for admin and give analytical data on sales.",
    role: "Full Stack Dev",
    url: "https://github.com/rully-saputra15/ionic-ecommerce-admin",
    techStack: [
      <>
        <SiCodeigniter />
        <SiIonic />
        <RiJavascriptLine />
        <BsBootstrap />
      </>,
    ],
  },
];

export const publications: Work[] = [
  {
    id: 1,
    title: "Classification of Indonesian News using LSTM-RNN Method",
    description:
      "News categorization has the aim of categorizing news into certain categories. In this paper, we build a machine learning model to categorize Indonesian news. One of the best methods for predicting large text sets is the Recurrent Neural Network (RNN) algorithm with Long-Short Term Memory (LSTM) architecture. In previous studies, the use of the LSTM-RNN method has a high level of accuracy for classifying news in English. For further exploration, in this study, a dataset to train and test the Indonesian news application model from the Jakartaresearch and web scraping from Kompas.com is used. Based on the experiment for the LSTM-RNN model, the final score of accuracy was 93%, the recall score was 91.8%, the precision score was 92.4%, and the Fl-Score score was 91.8%s. 17 news predictions from Detik.com have 100% accurate results predicting the correct category.",
    role: "Full Stack Dev",
    url: "https://github.com/rully-saputra15/news-classification",
    techStack: [
      <>
        <SiKeras />
        <IoLogoLaravel />
      </>,
    ],
  },
];
export const personal: Work[] = [
  {
    id: 1,
    title: "Royong",
    description:
      "The app and idea for CSIC (Computer Science Innovation Challenge) UMN 2019. For people to create 'gotong royong' events.",
    role: "Full Stack Dev",
    url: "https://github.com/rully-saputra15/e-bazaar",
    techStack: [
      <>
        <SiIonic />
        <TbBrandFirebase />
      </>,
    ],
  },
  {
    id: 2,
    title: "BookBook",
    description:
      "My first failed startup hahahaha. For users that wanna sell their preloved books.",
    role: "Full Stack Dev",
    url: "https://github.com/rully-saputra15/bookbook",
    techStack: [
      <>
        <SiIonic />
        <TbBrandFirebase />
      </>,
    ],
  },
  {
    id: 3,
    title: "TodoList",
    description: "TodoList app that looks and feels like Trello!",
    role: "Full Stack Dev",
    url: "https://todolist-rho-jet.vercel.app/",
    techStack: [
      <>
        <FaReact />
        <TbBrandTypescript />
        <SiChakraui />
        <TbBrandFramerMotion />
        <TbBrandVite />
      </>,
    ],
  },
  {
    id: 4,
    title: "React Generator Tools",
    description:
      "I called Alay generator. Sound silly hahaha. From this project, I learn about Map in javascript with the algorithms for converting plain text to alay text has 0(1).",
    role: "Full Stack Dev",
    url: "https://github.com/rully-saputra15/react-generator-tools",
    techStack: [
      <>
        <FaReact />
        <TbBrandTypescript />
        <SiChakraui />
        <TbBrandFramerMotion />
        <TbBrandVite />
      </>,
    ],
  },
  {
    id: 5,
    title: "E-Bazaar",
    description:
      "For my religious community to simplify buying food and drink from the bazaar",
    role: "Full Stack Dev",
    url: "https://github.com/rully-saputra15/e-bazaar",
    techStack: [
      <>
        <FaReact />
        <TbBrandTypescript />
        <SiChakraui />
      </>,
    ],
  },

  {
    id: 6,
    title: "Flutter News",
    description:
      "Consume public api and this project just for learning purpose",
    role: "Flutter Dev",
    url: "https://github.com/rully-saputra15/flutter-news",
    techStack: [
      <>
        <TbBrandFlutter />
      </>,
    ],
  },
];
