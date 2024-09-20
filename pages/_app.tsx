import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LazyMotion, domAnimation } from "framer-motion";

import "@/styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Layout>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
        <Component {...pageProps} />
      </Layout>
    </LazyMotion>
  );
}
