import type { AppProps } from "next/app";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
