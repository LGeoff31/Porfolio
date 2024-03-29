import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="../images/logo_biggest.png" />
      </Head>
      {/* <Head /> */}

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
