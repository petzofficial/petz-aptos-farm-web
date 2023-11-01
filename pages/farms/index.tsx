import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  fetchTransactionsAction,
  selectAccount,
  selectNewNetwork,
  selectTransactions,
} from "app/reducers/AccountSlice";
import FarmsTable from "../../components/HomePage/FarmsTable/index";

const TokenDetailPage = () => {
  const dispatch = useAppDispatch();
  const newNetwork = useAppSelector(selectNewNetwork);
  const transactions = useAppSelector(selectTransactions);
  const account = useAppSelector(selectAccount);

  useEffect(() => {
    if (!transactions.length) {
      dispatch(fetchTransactionsAction(account?.address));
    }
  }, [dispatch, account, newNetwork]);

  return (
    <>
      <FarmsTable />
    </>
  );
};

export default TokenDetailPage;
