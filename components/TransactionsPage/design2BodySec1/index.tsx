import React, { FC, Fragment, useEffect } from "react";
import styled from "styled-components/macro";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SenderImg from "../../../assets/sender.png";
import SendToImg from "../../../assets/sendto.png";
import Image from "next/image";
import { useAppSelector } from "app/hooks";
import { selectSpecificTransaction } from "app/reducers/AccountSlice";
import { convertToOctal, shortenString } from "utils/reUseAbleFunctions/reuseAbleFunctions";

const BodySec1 = styled.div`
  padding: 0px 20px;
  div {
    width: 100%;
    background-color: rgba(58,52,51,0.12);
    margin: 10px 0% 10px;
    padding: 30px 20px 20px;
    border-radius: 10px;
    display: inline-block;
    box-sizing: border-box;
    word-break: break-all;
    table {
      width: 100%;
      th {
        text-align: left;
        width: 30%;
        padding-bottom: 15px;
        color: rgba(215,113,88,1);
        @media (max-width: 768px) {
          width: 40%;
          padding-right: 10px;
        }
      }
      td {
        width: 70%;
        text-align: left;
        padding-bottom: 15px;
        font-size: 14px;
        @media (max-width: 768px) {
          width: 60%;
          padding-left: 10px;
        }
        p {
          background-color: rgba(58,52,51,0.12);
          padding: 2px 12px;
          border-radius: 10px;
          display: inline-block;
          font-size: 14px;
          vertical-align: middle;
        }

        img {
          display: inline-block;
          margin-right: 10px;
          width: 34px;
          vertical-align: middle;
        }
        span {
          background-color: rgba(58,52,51,0.12);
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 14px;
        }
        svg {
          font-size: 14px;
          vertical-align: middle;
        }
      }
    }
  }
`;

const Design2BodySec1: FC = () => {
  const specificTransaction = useAppSelector(selectSpecificTransaction) as any
  const specificTransactionFunction = specificTransaction?.payload?.function.match(/::.+$/)[0].substring(2);
  return (
    <BodySec1>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Version:</th>
              <td>{specificTransaction?.version}</td>
            </tr>
            <tr>
              <th>Status:</th>
              <td>
                <p>
                  <Fragment><InfoOutlinedIcon /> <span style={{ backgroundColor: "transparent" }}>{specificTransaction?.success ? specificTransaction?.success === true && ("Success") : ("Failed")}</span> </Fragment>
                </p>
              </td>
            </tr>
            <tr>
              <th>Sender:</th>
              <td>
                <Image
                  src={SenderImg}
                  alt=""
                  style={{ width: "35px", objectFit: "contain" }}
                />
                <span>
                  {shortenString(specificTransaction?.sender)} <ContentCopyIcon style={{ color: "#000", cursor: "pointer" }} onClick={() => {
                    navigator.clipboard.writeText(specificTransaction?.sender);
                  }} />
                </span>
              </td>
            </tr>
            <tr>
              <th>Smart Contract:</th>
              <td>
                <Image
                  src={SendToImg}
                  alt=""
                  style={{ width: "35px", objectFit: "contain" }}
                />
                <span>{shortenString(specificTransaction?.payload?.function.split('::')[0])}  <ContentCopyIcon style={{ cursor: "pointer" }} onClick={() => {
                  navigator.clipboard.writeText(specificTransaction?.payload?.function.split('::')[0]);
                }} /></span>
              </td>
            </tr>
            <tr>
              <th>Function:</th>
              <td>
                {specificTransactionFunction ? (<span style={{ color: "#000", cursor: "pointer" }}>{specificTransactionFunction}</span>) : (<span style={{ color: "#000", cursor: "pointer" }}>Script</span>)}
              </td>
            </tr>
            <tr>
              <th>Amount:</th>
              <td>{convertToOctal(specificTransaction?.gas_unit_price * specificTransaction?.gas_used).toLocaleString().split('.')[0]} APT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </BodySec1 >
  );
}

export default Design2BodySec1;
