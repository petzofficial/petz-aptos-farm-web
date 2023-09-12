import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';


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
interface Props { }

function Design2BodySec2({ }: Props): ReactElement {
  return (
    <BodySec2>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Block:</th>
              <td>639521878</td>
            </tr>
            <tr>
              <th>Sequence Number:</th>
              <td>30</td>
            </tr>
            <tr>
              <th>Expiration Timestamp:</th>
              <td>08/17/2023 16:52:16</td>
            </tr>
            <tr>
              <th>Timestamp:</th>
              <td>08/17/2023 16:52:16</td>
            </tr>
            <tr>
              <th>Gas Fee:</th>
              <td>
                0.000124 APT <span>124 Gas Unit</span>
              </td>
            </tr>
            <tr>
              <th>Gas Unit Price:</th>
              <td>.000001 APT</td>
            </tr>
            <tr>
              <th>Max Gas Limit:</th>
              <td>200.000 Gas Units</td>
            </tr>
            <tr>
              <th>VN Status:</th>
              <td>
                Transistion Exceuted and Committed with Error
                MODULE_ADDRESS_DOES_NOT_SENDER
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BodySec2>
  );
}

export default Design2BodySec2;
