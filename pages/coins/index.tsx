import { CoinsTable, Design1BellowHeader } from "../../components/HomePage";
import CustomTable from "../../components/HomePage/CustomTable";
import Pagination from "../../components/HomePage/Pagination";

import { useEffect } from "react";
import { selectAccount, fetchTransactionsAction, selectTransactions, selectCoins, selectTokens, fetchCoinsAction } from "app/reducers/AccountSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";
import NavTabs from "components/HomePage/Tabs";

const HomePage = () => {
  const account = useAppSelector(selectAccount)
  const dispatch = useAppDispatch()
  const transactions = useAppSelector(selectTransactions)


  return (
    <>
      <Design1BellowHeader />
      <NavTabs />
      {/* <Pagination /> */}
    </>
  );
};

export default HomePage;
