import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useAppSelector } from 'app/hooks';
import { selectSpecificToken } from 'app/reducers/AccountSlice';
import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { JsonViewer } from '@textea/json-viewer'

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
        width: auto;
        display: block;
        padding-right: 0px;
      }
    }
    td {
      width: 70%;
      text-align: left;
      padding-bottom: 15px;
      font-size: 14px;
      @media (max-width: 768px) {
        width: auto;
        display: block;
        padding-left: 0px;
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
      .data-key-pair{
        background-color: #D3D3D3;
        padding: 15px;
        border-radius: 10px;
        > .data-key {
          svg + span.css-0{
            display: none;
          }
        }
        span{
          background-color: transparent;
        }
      }
    }
  }
`;
interface Props { }

function Design2BodySec2({ }: Props): ReactElement {
  const specificToken = useAppSelector(selectSpecificToken) as any
  const data = {
    'given_to:Hash':
      specificToken?.token_properties_mutated_v1?.given_to
  };
  return (
    <BodySec2>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Property Version:</th>
              <td>{specificToken?.property_version_v1}</td>
            </tr>
            <tr>
              <th>Supply:</th>
              <td>{specificToken?.current_token_data?.supply}</td>
            </tr>
            <tr>
              <th>Maximum:</th>
              <td>{specificToken?.current_token_data?.maximum}</td>
            </tr>
            <tr>
              <th>Token Properties:</th>
              <td>
                <JsonViewer value={data} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BodySec2>
  );
}

export default Design2BodySec2;
