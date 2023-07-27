import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </Layout>
  );
}
