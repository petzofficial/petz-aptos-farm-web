import { FC } from 'react';

import { Design2BodySec1, Design2BodySec2, Design2BodySec3, Design2BellowHeader } from "../../components/TransactionsPage"


const Transactions: FC = () => {
  return (
    <>
      <Design2BellowHeader />
      <Design2BodySec1 />
      <Design2BodySec2 />
      <Design2BodySec3 />
    </>
  );
};

export default Transactions;
