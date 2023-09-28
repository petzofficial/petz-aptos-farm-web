import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Network, Provider } from 'aptos';
import axios from 'axios';
import {
  CoinsTypes,
  // CurrentFungibleAssetBalance,
  // Data,
} from 'utils/types/coinsTypes';
const provider = new Provider(Network.TESTNET);

export interface AccountState {
  account: any;
  transactions: Array<any>;
  coins: Array<CoinsTypes>;
  tokens: Array<any>;
  balanceDetails: Array<any>;
  specificTransaction: {};
  specificToken: {};
  specificTokenNftImg: {};
  transactionBlock: {};
}

const initialState: AccountState = {
  account: null!,
  transactions: [],
  coins: [],
  tokens: [],
  balanceDetails: [],
  specificTransaction: {},
  specificToken: {},
  specificTokenNftImg: {},
  transactionBlock: {},
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
    setSpecificTransaction: (state, action: PayloadAction<any>) => {
      state.specificTransaction = action.payload;
    },
    setSpecificToken: (state, action: PayloadAction<any>) => {
      state.specificToken = action.payload;
    },
    setTransactionBlock: (state, action: PayloadAction<any>) => {
      state.transactionBlock = action.payload;
    },
    setSpecificTokenNftImg: (state, action: PayloadAction<any>) => {
      const { tokenId, image } = action.payload;
      state.tokens = state.tokens.map((token) => {
        if (token.last_transaction_version === +tokenId) {
          return { ...token, image };
        }
        return { ...token };
      });
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
  setSpecificTokenNftImg,
  setTransactionBlock,
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

export const selectSpecificTokenNftImg = (state: RootState) =>
  state.account.specificTokenNftImg;
export const selectTransactionBlock = (state: RootState) =>
  state.account.transactionBlock;
export const selectSpecificToken = (tokenId: string) =>
  createSelector([selectTokens], (tokens) => {
    const specificTokenResponse = tokens.find(
      (token: any) => token?.last_transaction_version === +tokenId
    );

    return specificTokenResponse;
  });

// export const fetchSpecificTokenAction =
//   (tokenVersion: any) => (dispatch: any, getState: () => RootState) => {
//     const tokens = getState().account.tokens;

//     const imgUrl = specificTokenResponse?.current_token_data?.token_uri;
//     console.log("specificTokenResponseFromSlice", imgUrl);
//     dispatch(setSpecificToken(specificTokenResponse));
//     dispatch(setImgUrl(imgUrl));
//   };

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

export const fetchTokensAction =
  () => async (dispatch: any, getState: () => RootState) => {
    const { account } = getState().account;

    if (!account || !account.address) {
      console.log('Address Not Found.');
      return;
    }

    const nftResource: any = await provider.getOwnedTokens(account.address);

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

export const fetchSpecificTransactionAction =
  (transactionVersion: string) =>
    (dispatch: any, getState: () => RootState) => {
      const transactions = getState().account.transactions;
      const specificTransactionResponse = transactions.find(
        (transaction: any) => transaction?.version === transactionVersion
      );
      dispatch(setSpecificTransaction(specificTransactionResponse));
    };

export const fetchNftImgAction =
  (tokenUri: string, tokenId: string) => async (dispatch: any) => {
    try {
      const { data } = await axios.get(`/api/image?tokenUrl=${tokenUri}`);

      dispatch(setSpecificTokenNftImg({ tokenId, image: data }));
    } catch (error) {
      console.error('>> Error fetching nft imgs :', error);
    }
  };

export const fetchTransactionsBlockAction =
  (version: number) => async (dispatch: any) => {
    if (!version) {
      return;
    }
    const transactionBlockResponse: any = await provider.getBlockByVersion(version)
    dispatch(setTransactionBlock(transactionBlockResponse));
  };
