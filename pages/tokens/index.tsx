import { Design1BellowHeader, TokensTable } from "../../components/HomePage";
import CustomTable from "../../components/HomePage/CustomTable";
import Pagination from "../../components/HomePage/Pagination";

import { useEffect } from "react";
import { selectAccount, fetchTokensAction, selectTokens } from "app/reducers/AccountSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";
import NavTabs from "components/HomePage/Tabs";

const HomePage = () => {
  const account = useAppSelector(selectAccount)
  const dispatch = useAppDispatch()
  useEffect(() => {

    dispatch(fetchTokensAction(account?.address))
  }, [dispatch, account])

  return (
    <>
      <Design1BellowHeader />
      <NavTabs />
      {/* <Pagination /> */}
    </>
  );
};

export default HomePage;
