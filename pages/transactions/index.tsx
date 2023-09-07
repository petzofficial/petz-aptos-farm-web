import React, { FC } from 'react';
import Header from '../../components/HomePage/Header';
import Footer from '../../components/HomePage/Footer';
import { Design2BodySec1, Design2BodySec2, Design2BodySec3, Design2BellowHeader } from "../../components/TransactionsPage"

const Transactions: FC = () => {
  return (
    <>
      <Header />
      <Design2BellowHeader />
      <Design2BodySec1 />
      <Design2BodySec2 />
      <Design2BodySec3 />
      <Footer />
    </>
  );
};

export default Transactions;
