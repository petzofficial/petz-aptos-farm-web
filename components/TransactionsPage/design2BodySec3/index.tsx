import { FC } from 'react';
import styled from 'styled-components/macro';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails } from '@mui/material';
import { selectSpecificTransaction } from 'app/reducers/AccountSlice';
import { useAppSelector } from 'app/hooks';
import { JsonViewer } from '@textea/json-viewer'
const BodySec3 = styled.div`
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
        width: 100%;
        display: block;
      }
    }
    td {
      width: 70%;
      text-align: left;
      padding-bottom: 15px;
      font-size: 14px;
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
      @media (max-width: 768px) {
        width: 100%;
        display: block;
      }
      p {
        background-color: transparent;
        padding: 2px 12px;
        border-radius: 10px;
        display: inline-block;
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
`;


const Design2BodySec3: FC = () => {
  const specificTransaction = useAppSelector(selectSpecificTransaction) as any
  const data = {
    'public_key':
      specificTransaction?.signature?.public_key,
    'signature':
      specificTransaction?.signature?.signature,
    'type':
      specificTransaction?.signature?.type,
  };
  return (
    <BodySec3>
      <div>
        <table>
          <tbody>

            <tr>
              <th>Signature: </th>
              <td>
                <JsonViewer value={data} />
              </td>
            </tr>
            <tr>
              <th>State Change Hash:</th>
              <td>
                {specificTransaction?.state_change_hash}
              </td>
            </tr>
            <tr>
              <th>Event Root Hash:</th>
              <td>
                {specificTransaction?.event_root_hash}
              </td>
            </tr>
            <tr>
              <th>Accumulator Root Hash:</th>
              <td>
                {specificTransaction?.accumulator_root_hash}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BodySec3>
  );
}

export default Design2BodySec3;
