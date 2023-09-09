import React, { FC } from 'react';
import Header from '../../components/HomePage/Header';
import Footer from '../../components/HomePage/Footer';
import { Design2BodySec1, Design2BodySec2, Design2BodySec3, Design2BellowHeader } from "../../components/TransactionsPage"
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const wallets = [new PetraWallet()];

const Transactions: FC = () => {
  return (
    <>

      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <Header />
        <Design2BellowHeader />
        <Design2BodySec1 />
        <Design2BodySec2 />
        <Design2BodySec3 />
        <Footer />
      </AptosWalletAdapterProvider>
    </>
  );
};

export default Transactions;
