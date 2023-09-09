import { Design1BellowHeader } from "../components/HomePage";
import Footer from "../components/HomePage/Footer";
import CustomTable from "../components/HomePage/CustomTable";
import Pagination from "../components/HomePage/Pagination";
import Head from "next/head";
import Header from "components/HomePage/Header";
// import HomePage from './index';

import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const wallets = [new PetraWallet()];


const HomePage = () => {
  return (
    <>
      <Head>
        <title>PetZ Money</title>
      </Head>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
    
        <Header />
        <Design1BellowHeader />
        <CustomTable />
        <Pagination />
        <Footer />
      </AptosWalletAdapterProvider>
    </>
  );
};

export default HomePage;
