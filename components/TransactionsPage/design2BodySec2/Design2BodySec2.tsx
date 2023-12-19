import { useAppSelector } from "app/hooks";
import {
  selectSpecificTransaction,
  selectTransactionBlock,
} from "app/reducers/AccountSlice";
import React, { ReactElement } from "react";
import styled from "styled-components/macro";
import {
  convertToDecimal,
  convertToOctal,
  formatTimestamp,
} from "utils/reUseAbleFunctions/reuseAbleFunctions";

const BodySec2 = styled.div`
padding: 0px 20px;
 > div {
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
`;

function Design2BodySec2(): ReactElement {
  const blockDetails: any = useAppSelector(selectTransactionBlock);
  const specificTransaction = useAppSelector(selectSpecificTransaction) as any;
  return (
    <BodySec2>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Block:</th>
              <td>{blockDetails?.block_height}</td>
            </tr>
            <tr>
              <th>Sequence Number:</th>
              <td>{specificTransaction?.sequence_number}</td>
            </tr>
            <tr>
              <th>Expiration Timestamp:</th>
              <td>
                {" "}
                {specificTransaction?.expiration_timestamp_secs
                  ? new Date(
                      specificTransaction?.expiration_timestamp_secs * 1000
                    ).toLocaleString()
                  : ""}
              </td>
            </tr>
            <tr>
              <th>Timestamp:</th>
              <td>
                {specificTransaction?.timestamp
                  ? new Date(
                      parseInt(specificTransaction?.timestamp) / 1000
                    ).toLocaleString()
                  : ""}
              </td>
            </tr>

            <tr>
              <th>Gas Fee:</th>
              <td>
                <span>
                  {convertToOctal(
                    specificTransaction?.gas_unit_price *
                      specificTransaction?.gas_used
                  ).toString()}
                </span>{" "}
                APT{" "}
                <span>{specificTransaction?.gas_used as string} Gas Unit</span>
              </td>
            </tr>

            <tr>
              <th>Gas Unit Price:</th>
              <td>{convertToOctal(specificTransaction?.gas_unit_price)} APT</td>
            </tr>
            <tr>
              <th>Max Gas Limit:</th>
              <td>{specificTransaction?.max_gas_amount} Gas Units</td>
            </tr>
            <tr>
              <th>VM Status:</th>
              <td>{specificTransaction?.vm_status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </BodySec2>
  );
}

export default Design2BodySec2;
