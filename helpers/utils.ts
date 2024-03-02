import { event } from "nextjs-google-analytics";

export const handleOpenNewTab = (url: string) => {
  window.open(url, "_blank");
};

export const handleOpenBlog = () => {
  event("open_my_blog", {
    category: "open-medium",
  });
  window.open("https://medium.com/@rully.saputra4", "_blank");
};

export const handleOpenResume = () => {
  event("open_resume", {
    category: "Open Resume",
    label: "Open Resume",
  });

  handleOpenNewTab(
    "https://drive.google.com/file/d/1WEd-Y5on2TVz1Eoczsp2BtPa6-HkmeFR/view?usp=sharing"
  );
};

export const handleOpenSocialMedia = (socialMedia: string, url: string) => {
  event(`open_${socialMedia}`, {
    category: `Open ${socialMedia}`,
    label: socialMedia,
  });
  handleOpenNewTab(url);
};
