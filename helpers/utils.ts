import { sendGAEvent } from "@next/third-parties/google";

export const handleOpenNewTab = (url: string) => {
  window.open(url, "_blank");
};

export const handleOpenBlog = () => {
  sendGAEvent("event", "buttonClicked", { value: "open_my_blog" });
  window.open("https://medium.com/@rully.saputra4", "_blank");
};

export const handleOpenResume = () => {
  sendGAEvent("event", "clicked", { value: "open_resume" });

  handleOpenNewTab(
    "https://drive.google.com/file/d/1lyXJESeoiQgpZ4SgNlu_sdhjFWRtL9Vs/view?usp=sharing"
  );
};

export const handleOpenSocialMedia = (socialMedia: string, url: string) => {
  sendGAEvent(`event`, "iconClicked", { value: `open_${socialMedia}` });
  handleOpenNewTab(url);
};
