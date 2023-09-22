import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { HexString, Network, Provider } from "aptos";
import axios from "axios";
import {
  CoinsTypes,
  // CurrentFungibleAssetBalance,
  // Data,
} from "utils/types/coinsTypes";
const provider = new Provider(Network.TESTNET);

export interface AccountState {
  account: any;
  transactions: Array<any>;
  coins: Array<CoinsTypes>;
  tokens: Array<any>;
  balanceDetails: Array<any>;
  specificTransaction: {};
  specificToken: {};
  petraNetWorks: Array<any>;
  specificTokenNftImg: {};
}

const initialState: AccountState = {
  account: null!,
  transactions: [],
  coins: [],
  tokens: [],
  balanceDetails: [],
  specificTransaction: {},
  specificToken: {},
  petraNetWorks: [],
  specificTokenNftImg: {},
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<Array<any>>) => {
      state.transactions = action.payload;
    },
    setAccount: (state, action: PayloadAction<any>) => {
      state.account = action.payload;
    },
    setCoins: (state, action: PayloadAction<any>) => {
      state.coins = action.payload.current_fungible_asset_balances;
    },
    setTokens: (state, action: PayloadAction<any>) => {
      state.tokens = action.payload.current_token_ownerships_v2;
    },
    setBalanceDetails: (state, action: PayloadAction<any>) => {
      state.balanceDetails = action.payload;
    },
    setSpecificTransaction: (state, action: PayloadAction<any>) => {
      state.specificTransaction = action.payload;
    },
    setSpecificToken: (state, action: PayloadAction<any>) => {
      state.specificToken = action.payload;
    },
    setPetraNetWorks: (state, action: PayloadAction<any>) => {
      state.petraNetWorks, action.payload;
    },
    setSpecificTokenNftImg: (state, action: PayloadAction<any>) => {
      state.specificTokenNftImg, action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setBalanceDetails,
  setTransactions,
  setAccount,
  setCoins,
  setTokens,
  setSpecificTransaction,
  setSpecificToken,
  setPetraNetWorks,
  setSpecificTokenNftImg,
} = accountSlice.actions;

export const selectTransactions = (state: RootState) =>
  state.account.transactions;

export const selectAccount = (state: RootState) => state.account.account;
export const selectCoins = (state: RootState) => state.account.coins;
export const selectTokens = (state: RootState) => state.account.tokens;
export const selectBalanceDetails = (state: RootState) =>
  state.account.balanceDetails;

export default accountSlice.reducer;
export const selectSpecificTransaction = (state: RootState) =>
  state.account.specificTransaction;
export const selectSpecificToken = (state: RootState) =>
  state.account.specificToken;
export const selectPetraNetWorks = (state: RootState) =>
  state.account.petraNetWorks;
export const selectSpecificTokenNftImg = (state: RootState) =>
  state.account.specificTokenNftImg;
// const fetchList = async () => {
//   if (!account) return [];
//   try {
//     const coinResource = await provider.getAccountResource(
//       account?.address,
//       `${moduleAddress}::coin::CoinStore<${moduleAddress}::aptos_coin::AptosCoin>`
//     );

//     const nftResource = await provider.getOwnedTokens(account?.address);

//     const faResource = await provider.getAccountCoinsData(account?.address);

//     const resource = await provider.getAccountResources(account?.address);
//   } catch (e: any) {}
// };

//     const coinResource = await provider.getAccountResource(
//       account?.address,
//
//     );

export const fetchTransactionsAction =
  (address: string) => async (dispatch: any) => {
    if (!address) {
      return;
    }

    const transactionResource = await provider.getAccountTransactions(address);

    dispatch(setTransactions(transactionResource));
  };

export const fetchCoinsAction = (address: string) => async (dispatch: any) => {
  if (!address) {
    return;
  }

  const faResource: any = await provider.getAccountCoinsData(address);

  dispatch(setCoins(faResource));
};

export const fetchTokensAction = (address: string) => async (dispatch: any) => {
  if (!address) {
    return;
  }

  const nftResource: any = await provider.getOwnedTokens(address);

  dispatch(setTokens(nftResource));
};

export const fetchBalanceDetailsAction =
  (address: string) => async (dispatch: any) => {
    if (!address) {
      return;
    }
    const moduleAddress = "0x1";

    const coinResource: any = await provider.getAccountResource(
      address,
      `${moduleAddress}::coin::CoinStore<${moduleAddress}::aptos_coin::AptosCoin>`
    );
    dispatch(setBalanceDetails(coinResource));
  };
export const fetchSpecificTransactionAction =
  (transactionVersion: string) =>
  (dispatch: any, getState: () => RootState) => {
    const transactions = getState().account.transactions;
    const specificTransactionResponse = transactions.find(
      (transaction: any) => transaction?.version === transactionVersion
    );
    dispatch(setSpecificTransaction(specificTransactionResponse));
  };

export const fetchSpecificTokenAction =
  (tokenVersion: any) => (dispatch: any, getState: () => RootState) => {
    const tokens = getState().account.tokens;
    const specificTokenResponse = tokens.find(
      (token: any) => token?.last_transaction_version == tokenVersion
    );
    dispatch(setSpecificToken(specificTokenResponse));
  };

export const fetchNftImgAction = () => async (dispatch: any) => {
  const url = "https://nft.petz.money/v1/metadata/0.json";
  await fetch(url)
    .then((res) => console.log("kya", res))
    .catch((err) => console.log(err));
  // console.log("kya", res);
  // const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const { data } = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
        "Sec-Ch-Ua":
          '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        Accept: "application/json, text/plain, */*",
      },
    });
    // console.log(">> fetchNftImgdata", data);
    dispatch(setSpecificTokenNftImg(data));
  } catch (error) {
    console.error(">> Error fetching nft imgs :", error);
  }
};
