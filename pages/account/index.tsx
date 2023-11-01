import { Design1BellowHeader } from "../../components/HomePage";
import { useEffect } from "react";
import {
  selectAccount,
  fetchTransactionsAction,
  selectNewNetwork,
} from "app/reducers/AccountSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";
import NavTabs from "components/HomePage/Tabs";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  const newNetwork = useAppSelector(selectNewNetwork) as any;
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTransactionsAction(account?.address));
  }, [dispatch, account, newNetwork]);

  return (
    <>
      <ToastContainer />
      <Design1BellowHeader />
      <NavTabs />
    </>
  );
};

export default HomePage;
