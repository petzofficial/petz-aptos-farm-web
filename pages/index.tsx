import { Design1BellowHeader } from "../components/HomePage";


import { useEffect } from "react";
import { selectAccount, fetchTransactionsAction } from "app/reducers/AccountSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";
import NavTabs from "components/HomePage/Tabs";

const HomePage = () => {
  const account = useAppSelector(selectAccount)
  const dispatch = useAppDispatch()
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
