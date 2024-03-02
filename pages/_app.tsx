import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { LazyMotion, domAnimation } from "framer-motion";

import "@/styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Layout>
        <GoogleAnalytics trackPageViews strategy="worker" />
        <Component {...pageProps} />
      </Layout>
    </LazyMotion>
  );
}
