import React, { FC, useEffect, useState } from "react";
import Logo from '../../../assets/logo.png';
import styled from 'styled-components/macro';
import Link from 'next/link';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Image from 'next/image'
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { selectAccount } from "app/reducers/AccountSlice";
import { useAppDispatch } from "app/hooks";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { setAccount } from 'app/reducers/AccountSlice';


const HeaderDiv = styled.div`
  width: 100%;
  .wrapwith {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    @media (max-width: 768px) {
      display: block;
    }
    .logo {
      @media (max-width: 768px) {
        margin: 0px auto 20px;
      }
      a {
        img {
          display: block;
          max-width: 100%;
          @media (max-width: 768px) {
            display: block;
            align-items: center;
            margin: auto;
          }
        }
      }
    }
    .headerRightSec {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        display: block;
        text-align: center;
      }
      .headerRight1 {
        margin: 0px 30px;
        ul {
          margin: 0;
          padding: 0;
          li {
            list-style: none;
            margin: 10px 0px;
            a {
              text-decoration: none;
              color: #000;
              font-weight: 500;
              font-size: 18px;
              &:hover {
                color: rgb(128, 128, 128);
              }
            }
          }
        }
      }
      .headerRight {
        display: flex;
        padding: 7px 20px;
        border-radius: 10px;
        align-content: center;
        align-items: center;
        @media (max-width: 768px) {
          display: block;
          text-align: center;
        }
        img {
          object-fit: contain;
          object-position: center;
          @media (max-width: 768px) {
            display: inline-block;
          }
        }
        p {
          color: #000;
          font-size: 14px;
          margin-left: 10px;
          font-weight: 500;
          @media (max-width: 768px) {
            display: inline-block;
          }
        }
      }
    }
  }
`;



const Header: FC = () => {
  const dispatch = useAppDispatch()

  // const account = useAppSelector(selectAccount)
  const { account } = useWallet();




  const moduleAddress = "0x1";
  const nftModuleAddress = "0x3";

  useEffect(() => {
    dispatch(setAccount(account || null!))
  }, [account?.address]);

  // const fetchList = async () => {
  //   if (!account) return [];
  //   try {
  //     const transactionResource = await provider.getAccountTransactions(
  //       account?.address
  //     );

  //     const coinResource = await provider.getAccountResource(
  //       account?.address,
  //       `${moduleAddress}::coin::CoinStore<${moduleAddress}::aptos_coin::AptosCoin>`,
  //     );

  //     const nftResource = await provider.getOwnedTokens(
  //       account?.address
  //     );

  //     const faResource = await provider.getAccountCoinsData(
  //       account?.address
  //     );

  //     const resource = await provider.getAccountResources(
  //       account?.address
  //     );

  //     console.log(transactionResource)
  //     //  console.log(coinResource)
  //     console.log(faResource)
  //     console.log(nftResource)
  //     // console.log(resource)

  //   } catch (e: any) {

  //   }
  // };


  return (
    <div>
      <HeaderDiv>

        <div className="wrapwith">
          <div className="logo">
            <Link href="/">
              <Image src={Logo} alt="logo" style={{ width: 60, height: 60 }} />
            </Link>
          </div>
          <div className="headerRightSec">
            <div className="headerRight1">
              <ul>
                <li>
                  <Link href="/transactions">{account?.address} Transaction</Link>
                </li>
              </ul>
            </div>
            <div className="headerRight">
              <WalletSelector />
            </div>
          </div>
        </div>
      </HeaderDiv>
    </div>
  );
};

export default Header;
