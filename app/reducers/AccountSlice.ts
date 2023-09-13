import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { HexString, Network, Provider } from 'aptos';
import {
  CoinsTypes,
  // CurrentFungibleAssetBalance,
  // Data,
} from 'types/coinsTypes';
const provider = new Provider(Network.TESTNET);

export interface AccountState {
  account: any;
  transactions: Array<any>;
  coins: Array<CoinsTypes>;
  tokens: Array<any>;
  balanceDetails: Array<any>;
}

const initialState: AccountState = {
  account: null!,
  transactions: [],
  coins: [],
  tokens: [],
  balanceDetails: [],
};

export const accountSlice = createSlice({
  name: 'account',
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setBalanceDetails,
  setTransactions,
  setAccount,
  setCoins,
  setTokens,
} = accountSlice.actions;

export const selectTransactions = (state: RootState) =>
  state.account.transactions;

export const selectAccount = (state: RootState) => state.account.account;
export const selectCoins = (state: RootState) => state.account.coins;
export const selectTokens = (state: RootState) => state.account.tokens;
export const selectBalanceDetails = (state: RootState) =>
  state.account.balanceDetails;

export default accountSlice.reducer;

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

//     console.log(transactionResource);
//     //  console.log(coinResource)
//     console.log(faResource);
//     console.log(nftResource);
//     // console.log(resource)
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
    const moduleAddress = '0x1';

    const coinResource: any = await provider.getAccountResource(
      address,
      `${moduleAddress}::coin::CoinStore<${moduleAddress}::aptos_coin::AptosCoin>`
    );
    dispatch(setBalanceDetails(coinResource));
  };
