import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../public/images/c++.png" />
        <title>Geoffrey Lee</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
