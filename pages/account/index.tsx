import { Design1BellowHeader } from "../../components/HomePage";
import ErrorPage from "./ErrorPage";
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
      {account ? (
        <>
          <ToastContainer />
          <Design1BellowHeader />
          <NavTabs />
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default HomePage;
