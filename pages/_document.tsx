import { Html, Head, Main, NextScript } from "next/document";

const resetCSS = "../src/styles/_reset.css";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href={resetCSS} />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;700&family=Martel+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;