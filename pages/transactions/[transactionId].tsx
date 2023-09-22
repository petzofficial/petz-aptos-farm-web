import { FC, useEffect, useLayoutEffect } from 'react';

import { Design2BodySec1, Design2BodySec2, Design2BodySec3, Design2BellowHeader } from "../../components/TransactionsPage"
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchSpecificTransactionAction, fetchTransactionsAction, selectAccount, selectSpecificTransaction, selectTransactions } from 'app/reducers/AccountSlice';
import ErrorPage from './ErrorPage';


const Transactions: FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const { transactionId } = router.query
  const specificTransaction = useAppSelector(selectSpecificTransaction) as any
  const account = useAppSelector(selectAccount)
  const transactions = useAppSelector(selectTransactions)

  useEffect(() => {
    dispatch(fetchSpecificTransactionAction(transactionId as any));
    if (account && !specificTransaction) {
      dispatch(fetchTransactionsAction(account?.address))
    }
  }, [account, transactions])

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
