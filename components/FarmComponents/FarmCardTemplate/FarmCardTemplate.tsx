import React from "react";
import Button from "@mui/material/Button";
import CalendarIcon from "../../../assets/calendar.svg";
import Image from "next/image";
import styled from "styled-components";
import { ICardData } from "types/cardsTypes";
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

const FarmCardTemplate = (props: ICardData) => {
  return (
    <MainDiv>
      <div className="sec1_mainDiv">
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
        <div className="main_heading">
          <h3>{props?.cards?.type}</h3>
          <span>
            <Image
              src={props?.cards?.images?.graphLogo?.src}
              alt="logo"
              className="graph_logo"
              width={15}
              height={15}
            />
            {props?.cards?.connectionType}
          </span>
        </div>
        <div className="afterHeading_Main">
          <span className="afterheading">
            {props?.cards?.cryptoAmount}
            <Image
              src={props?.cards?.images?.cryptoLogo?.src}
              alt="logo"
              className="small_img"
              width={18}
              height={18}
            />
            APT
          </span>
          <span className="label">{props?.cards?.durationDetails}</span>
        </div>
        <hr />
        <div className="bottSec_Main">
          <div className="point1">
            <span>{props?.cards?.itemName}:</span>
            <p>{props?.cards?.itemDetails}</p>
          </div>
          <div className="point1">
            <span>APR:</span>
            <p>{props?.cards?.APR}</p>
          </div>
          <div className="point1">
            <span>TVL:</span>
            <p>{props?.cards?.TVL}</p>
          </div>
          <div className="point1">
            <span>STAKED:</span>
            <p>{props?.cards?.staked}</p>
          </div>
          <div className="point1">
            <span>EARNED:</span>
            <p>{props?.cards?.earned}</p>
          </div>
          <div className="point1">
            <span>Time Left:</span>
            <p>
              {props?.cards?.timeLeft}{" "}
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
