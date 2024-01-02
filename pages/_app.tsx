import "../styles/globals.css";
import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { store } from '../app/store'
import { Provider } from "react-redux";
import Head from "next/head";
import { BloctoWallet } from "@blocto/aptos-wallet-adapter-plugin";
//import { FaceWallet } from "@haechi-labs/face-aptos-adapter-plugin";
//import { FewchaWallet } from "fewcha-plugin-wallet-adapter";
//import { FlipperWallet } from "@flipperplatform/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
//import { NightlyWallet } from "@nightlylabs/aptos-wallet-adapter-plugin";
//import { OpenBlockWallet } from "@openblockhq/aptos-wallet-adapter";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
//import { RiseWallet } from "@rise-wallet/wallet-adapter";
//import { TokenPocketWallet } from "@tp-lab/aptos-wallet-adapter";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
//import { MSafeWalletAdapter } from "msafe-plugin-wallet-adapter";
//import { WelldoneWallet } from "@welldone-studio/aptos-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Header from "components/HomePage/Header";
import Footer from 'components/HomePage/Footer';

const wallets = [
  new MartianWallet(),
  new PetraWallet(),
  new PontemWallet(),
  new TrustWallet(),
];


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
