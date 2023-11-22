import React, { useEffect, useState, useLayoutEffect } from "react";
import Button from "@mui/material/Button";
import CalendarIcon from "../../../assets/calendar.svg";
import Image from "next/image";
import styled from "styled-components";
import { ICardData } from "types/cardsTypes";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useAppSelector } from "app/hooks";
import {
  selectNewNetwork
} from "app/reducers/AccountSlice";
import { getWalletNetwork } from 'utils/aptosNetWorks/AptosNetworks';


const MainDiv = styled.div`
    background-color:#f1e9e7;
    width:26%;
    height: auto;
    text-align: center;
    margin-top:30px;
    border-radius:12px;
    margin-right:2%;
    @media screen and (max-width: 850px){
      width: 48%;
      margin: 10px 1%;
      display: inline-block;
    }
    @media screen and (max-width: 667px){
      width: 98%;
    }
  .main_heading>h3{.cardbuttons_main
    color:#000;
    font-size:20px;
    margin: 10px
  }
  .main_heading>span{
    color:#000;
    font-size:11px;
  }
  .main_heading{
    padding-top: 20px;
  }
  .small_img{
    margin: 0px 8px;
    position: relative;
    top: 5px;
  
  }
  .label{
    font-size:13px;
    color:#000;
    margin-top:10px;
    opacity: .6;
  }
  .afterheading{
    font-size:13px;
    color:#000;
  }
  .afterHeading_Main{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .sec1_mainDiv>hr{
    width:60%;
  }
  .point1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:60%;
    margin: 0 auto;
  }
  .point1>span{
    font-weight: 400;
    font-size: 13px;
    color:#000;
    line-height: 18px;
    opacity: .6;
  }
  .point1>p{
    font-size:13px;
    color:#000;
    font-weight: 600;
    line-height: 18px;
    text-align:start;
    margin: 4px
  }
  .card_button{
    font-size:100px
    width: 100px;
    height:40px;
    border-radius:5px;
    background-color: #f49c63;
    margin-top: 10px;
    color:#ffffff;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  .card_button:hover{
    background-color: #f1e9e7;
    color:#000;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  .point1>p>img{
    margin-left:6px;
    position:relative;
    top:4px
  }
  .main_heading>span>img{
    margin-right:2px;
    position: relative;
    top:4px;
  }
  .sec1_mainDiv>img{
    position:relative;
    top:20px;
  }

    .cardbuttons_main {
      width: 96%;
      display: block;
      margin:10px;
  
      button{
        font-size: 13px;
        display: inline-block;
        width: 31%;
        margin: 5px 1%;
        max-width: 31%;
        min-width: auto !important;
      }import { ICardData } from 'utils/types/cardsTypes';
import { ICardData } from '../../../types/cardsTypes';

  }
`;

const FarmCardTemplate = (props: any) => {
  const { account, signAndSubmitTransaction } = useWallet();
  const newNetwork = useAppSelector(selectNewNetwork) as any;
  const provider = getWalletNetwork(newNetwork)

  const moduleAddress2 = "0x82afe3de6e9acaf4f2de72ae50c3851a65bb86576198ef969937d59190873dfd";

  const handleHarvest = async () => {
    if (!account) return [];
    const payload3 = {
      type: "entry_function_payload",
      function: `${moduleAddress2}::scripts::harvest`,
      type_arguments: ["0x9cc3c27b8d398ab6fc82cbc9dc6b43bb9164f72da465631628163822662a8580::lp_coin::LP<0xc0acbd3f0dc1d5361f8315e60fcbc577a41be51f049ca092ae6db7fa8609fab5::moon_coin::MoonCoin, 0x1::aptos_coin::AptosCoin, 0x45ef7a3a1221e7c10d190a550aa30fa5bc3208ed06ee3661ec0afa3d8b418580::curves::Uncorrelated>", "0x1::aptos_coin::AptosCoin"],
      arguments: [moduleAddress2],
    };

    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(payload3);
      // wait for transaction
      await provider.waitForTransaction(response.hash);


    } catch (error: any) {
      console.log("error", error);
    } finally {
      //setTransactionInProgress(false);
    }

  }
  const unixTimestamp = props?.userResource?.unlock_time; // Replace this with your Unix timestamp
  // Convert Unix timestamp to milliseconds
  const [timeLeft, setTimeLeft] = useState(0);
  const date = new Date(timeLeft * 1000);
  const todayDate = new Date();
  useLayoutEffect(() => {
    setTimeLeft(unixTimestamp)
  }, [unixTimestamp])

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {

      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Get the various components of the date
  const month = (todayDate.getMonth() + 1) - (date.getMonth() + 1); // Month is 0-indexed, so we add 1
  const day = date.getDate() - todayDate.getDate();
  const currentWeek = Math.ceil(day / 7)
  const unixTimestamp2 = props?.cards?.data?.start_timestamp; // Replace this with your Unix timestamp
  
  const [timeLeft2, setTimeLeft2] = useState(0);
  const date2 = new Date(timeLeft2 * 1000);
  useLayoutEffect(() => {
    setTimeLeft2(unixTimestamp2)
  }, [unixTimestamp2])
  useEffect(() => {
    if (!timeLeft2) return;
    const intervalId = setInterval(() => {

      setTimeLeft2(timeLeft2 - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft2]);
  // Get the various components of the date
  const month2 = (date2.getMonth() + 1) - (date.getMonth() + 1); // Month is 0-indexed, so we add 1
  const day2 =  date2.getDate() - todayDate.getDate();
  const currentWeek2 = Math.ceil(day2 / 7)

  const RPS = (props?.cards?.data?.reward_per_sec * (604800) / (Math.pow(10, 8))).toFixed(8)
  const APR = ((props?.cards?.data?.reward_per_sec * (31536000) / Math.pow(10, 8)) / (props?.cards?.data?.stake_coins?.value / Math.pow(10, 8))) * 100
  //console.log(props?.cards?.data?.reward_per_sec * (31536000) / Math.pow(10, 8))
  //console.log(props?.cards?.data?.stake_coins?.value / Math.pow(10, 8))
  const TVL = (props?.cards?.data?.stake_coins?.value / (Math.pow(10, 8))).toFixed(8)
  const staked = (props?.userResource?.amount / (Math.pow(10, 8))).toFixed(8)
  const earned = (props?.userResource?.earned_reward / (Math.pow(10, 8))).toFixed(8)
  const curve = props?.cards?.type?.includes("Uncorrelated");
  return (
    <MainDiv>
      <div className="sec1_mainDiv">
        {props?.cards?.images?.logoImg1?.src && (
        <>
          <Image
            src={props?.cards?.images?.logoImg1?.src}
            alt="logo"
            className=""
            width={46}
            height={46}
          />
          <Image
            src={props?.cards?.images?.logoImg2?.src}
            alt="logo"
            className="image_border"
            width={46}
            height={46}
            style={{ marginLeft: "-10px" }}
          />
        </>
        )}
        <div className="main_heading">
          <h3>MOON/APTU</h3>
          <span>
            {props?.cards?.images?.graphLogo?.src && (
            <Image
              src={props?.cards?.images?.graphLogo?.src}
              alt="logo"
              className="graph_logo"
              width={15}
              height={15}
            />
            )}
            {curve ? "Uncorrelated" : ""}
          </span>
        </div>
        <div className="afterHeading_Main">
          <span className="afterheading">
            {/* {props?.cards?.cryptoAmount} */}
            {RPS}
            {props?.cards?.images?.cryptoLogo?.src && (
            <Image
              src={props?.cards?.images?.cryptoLogo?.src}
              alt="logo"
              className="small_img"
              width={18}
              height={18}
            />
            )}
            APT
          </span>
          <span className="label">Per week per 1 LP</span>
        </div>
        <hr />
        <div className="bottSec_Main">
          <div className="point1">
            <span>NFT:</span>
            <p>{props?.cards?.data?.nft_config ? props?.cards?.data?.nft_config : "N/A"}</p>
          </div>
          <div className="point1">
            <span>APR:</span>
            <p>{APR.toFixed(2)}%</p>
          </div>
          <div className="point1">
            <span>TVL:</span>
            <p>${TVL}</p>
          </div>
          <div className="point1">
            <span>STAKED:</span>
            <p>${staked}</p>
          </div>
          <div className="point1">
            <span>EARNED:</span>
            <p>${earned}</p>
          </div>

          <div className="point1">
            <span>Reward Time:</span>
            <p>
             {todayDate.getTime() > date.getTime() ? "Inactive" : `${month}M ${currentWeek}W ${day}D`}
              <Image
                src={CalendarIcon}
                alt="logo"
                className=""
                style={{ width: 18, height: 18 }}
              />
            </p>
          </div>
          <div className="point1">
            <span>Unlock Time:</span>
            <p>
              {todayDate.getTime() > date.getTime() ? "Unlocked" :  `${month2}M ${currentWeek2}W ${day2}D`}
              <Image
                src={CalendarIcon}
                alt="logo"
                className=""
                style={{ width: 18, height: 18 }}
              />
            </p>
          </div>
        </div>
        <hr />
        <div className="cardbuttons_main">
          <div>
            <Button
              id="fade-button"
              className="card_button"
              aria-haspopup="true"
              sx={{
                color: "#000",
                textTransform: "capitalize",
                fontWeight: "500",
                fontSize: "18px",
              }}
              onClick={() => {
                props.onShowStackedPopup();
              }}
            >
              Stake
            </Button>
            <Button
              id="fade-button"
              className="card_button"
              aria-haspopup="true"
              sx={{
                color: "#000",
                textTransform: "capitalize",
                fontWeight: "500",
                fontSize: "18px",
              }}
              onClick={() => {
                props.onShowUnstackedPopup();
              }}
            >
              Unstake
            </Button>
          </div>
          <div>
            <Button
              id="fade-button"
              className="card_button"
              aria-haspopup="true"
              sx={{
                color: "#000",
                textTransform: "capitalize",
                fontWeight: "500",
                fontSize: "18px",
              }}
              onClick={() => {
                handleHarvest()
              }}
            >
              Harvest
            </Button>
          </div>
        </div>
      </div>
    </MainDiv>
  );
};
export default FarmCardTemplate;
