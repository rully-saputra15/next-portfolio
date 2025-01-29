import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";
import { metaBusinessOpportunityDescription } from "@/helpers/constants";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={metaBusinessOpportunityDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rully Saputra" />
      </Head>
      <body className="bg-[#faf9f7]">
        <Main />
        <NextScript />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      </body>
    </Html>
  );
}
