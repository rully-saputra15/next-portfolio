import type { AppProps } from "next/app";
import { LazyMotion, domAnimation } from "framer-motion";

import "@/styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LazyMotion>
  );
}
