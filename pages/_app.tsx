import "../styles/globals.css";
import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { store } from '../app/store'
import { Provider } from "react-redux";
import Head from "next/head";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Header from "components/HomePage/Header";
import Footer from 'components/HomePage/Footer';

const wallets = [new PetraWallet()];


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

      <Head>
        <title>PetZ Money</title>
      </Head>
      <Provider store={store}>
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AptosWalletAdapterProvider>
      </Provider>
    </>
  );
}
