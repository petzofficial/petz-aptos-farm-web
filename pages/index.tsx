import { Design1BellowHeader } from "../components/HomePage";


import { useEffect } from "react";
import { selectAccount, fetchTransactionsAction, selectTransactions } from "app/reducers/AccountSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";
import NavTabs from "components/HomePage/Tabs";

const HomePage = () => {
  const account = useAppSelector(selectAccount)
  const dispatch = useAppDispatch()
  const transactions = useAppSelector(selectTransactions)
  useEffect(() => {

    dispatch(fetchTransactionsAction(account?.address))
  }, [dispatch, account])

  return (
    <>
      <Design1BellowHeader />
      <NavTabs />
    </>
  );
};

export default HomePage;
