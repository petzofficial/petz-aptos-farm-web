import "../styles/globals.css";
import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";


export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
