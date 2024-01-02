import { Design1BellowHeader } from "../components/HomePage";
import HeroSectoin from "components/HomePage/HeroSection";
import JoinNowSection from "components/HomePage/JoinNowSection";
import Tokkenomics from "components/HomePage/Tokenomics";

import { useEffect } from "react";
import {
  selectAccount,
  fetchTransactionsAction,
  selectNewNetwork,
} from "app/reducers/AccountSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";
import NavTabs from "components/HomePage/Tabs";
import { ToastContainer } from "react-toastify";
import Nft from "components/HomePage/Nft";
import Status from "components/HomePage/Status";

const HomePage = () => {
  const newNetwork = useAppSelector(selectNewNetwork) as any;
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTransactionsAction(account?.address));
  }, [dispatch, account, newNetwork]);

  return (
    <>
      <HeroSectoin/>
      {/* stats (Coin Price, Circulating Supply, Market Cap, TVL, Total Users, Total Transactions)  */ }
      <Status />
      <Tokkenomics/>
      <Nft />
      <JoinNowSection/>
      
      {/* <ToastContainer /> */}
      {/* <Design1BellowHeader /> */}
      {/* <NavTabs /> */}
    </>
  );
};

export default HomePage;
