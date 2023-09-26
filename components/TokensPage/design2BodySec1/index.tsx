import React, { FC } from "react";
import styled from "styled-components/macro";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SendToImg from "../../../assets/sendto.png";
import Image from "next/image";
import { shortenString } from "utils/reUseAbleFunctions/reuseAbleFunctions";

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
          display: block;
          width: auto;
        }
      }
      td {
        width: 70%;
        text-align: left;
        padding-bottom: 15px;
        font-size: 14px;
        @media (max-width: 768px) {
          display: block;
          width: auto;
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

interface Props {
  specificToken: any
}

const Design2BodySec1: FC<Props> = (props) => {
  const { specificToken } = props

  return (
    <BodySec1>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Token name:</th>
              <td>{specificToken?.current_token_data?.token_name}</td>
            </tr>
            <tr>
              <th>Owner:</th>
              <td>
                <Image
                  src={SendToImg}
                  alt=""
                  style={{ width: "35px", objectFit: "contain" }}
                />
                <p>
                  <span style={{ backgroundColor: "transparent" }}>{shortenString(specificToken?.owner_address)}<ContentCopyIcon style={{ cursor: "pointer" }} onClick={() => {
                    navigator.clipboard.writeText(specificToken?.owner_address);
                  }} /></span>
                </p>
              </td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>
                <p>
                  <span style={{ backgroundColor: "transparent" }}>{specificToken?.current_token_data?.description ? specificToken?.current_token_data?.description : "N/A"}</span>
                </p>
              </td>
            </tr>
            <tr>
              <th>Collection Name:</th>
              <td>
                {/* <Image
                  src={SenderImg}
                  alt=""
                  style={{ width: "35px", objectFit: "contain" }}
                /> */}
                <span>
                  {specificToken?.current_token_data?.current_collection?.collection_name}
                </span>
              </td>
            </tr>
            <tr>
              <th>Creator:</th>
              <td>
                <Image
                  src={SendToImg}
                  alt=""
                  style={{ width: "35px", objectFit: "contain" }}
                />
                <span>
                  {shortenString(specificToken?.current_token_data?.current_collection?.creator_address)} <ContentCopyIcon style={{ cursor: "pointer" }} onClick={() => {
                    navigator.clipboard.writeText(specificToken?.current_token_data?.current_collection?.creator_address);
                  }} />
                </span>
              </td>
            </tr>
            <tr>
              <th>Metadata:</th>
              <td>
                <span>{specificToken?.current_token_data?.current_collection?.uri}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BodySec1>
  );
}

export default Design2BodySec1;

