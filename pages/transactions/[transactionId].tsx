import { FC, useEffect } from "react";

import {
  Design2BodySec1,
  Design2BodySec2,
  Design2BodySec3,
  Design2BellowHeader,
} from "../../components/TransactionsPage";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  fetchSpecificTransactionAction,
  fetchTransactionsAction,
  fetchTransactionsBlockAction,
  selectAccount,
  selectSpecificTransaction,
  selectTransactions,
} from "app/reducers/AccountSlice";
import ErrorPage from "components/ErrorPage/ErrorPage";

const Transactions: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { transactionId } = router.query;
  const specificTransaction = useAppSelector(selectSpecificTransaction);
  const account = useAppSelector(selectAccount);
  const transactions = useAppSelector(selectTransactions);

  useEffect(() => {
    dispatch(fetchSpecificTransactionAction(transactionId as any));
    if (account && !specificTransaction && transactionId) {
      dispatch(fetchTransactionsAction(account?.address));
    }
    dispatch(fetchTransactionsBlockAction(transactionId as any));
  }, [account, transactions]);
  console.log(">> transactionId", typeof transactionId);
  return (
    <>
      {account ? (
        <>
          <Design2BellowHeader />
          <Design2BodySec1 />
          <Design2BodySec2 />
          <Design2BodySec3 />
        </>
      ) : (
        <>
          <ErrorPage />
        </>
      )}
    </>
  );
};

export default Transactions;
