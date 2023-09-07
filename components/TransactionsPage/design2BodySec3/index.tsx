import { FC } from 'react';
import styled from 'styled-components/macro';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails } from '@mui/material';

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

const data = {
  'State Change Hash':
    '0xbb6d853d16d359ed75700a0cd208d6ebeb96935d05da4fdb97d36c55b15871d6',
  'Event Root Hash':
    '0xbb6d853d16d359ed75700a0cd208d6ebeb96935d05da4fdb97d36c55b15871d6',
  'Accumulator Root Hash':
    '0xbb6d853d16d359ed75700a0cd208d6ebeb96935d05da4fdb97d36c55b15871d6',
};

const Design2BodySec3: FC = () => {

  return (
    <BodySec3>
      <div>
        <table>
          <tbody>
            {' '}
            <tr>
              <th>Signature: </th>
              <td>
                <Accordion
                  sx={{
                    width: '100%',
                    boxShadow: 'none !important',
                    backgroundColor: 'transparent !important',
                  }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      boxShadow: 'none',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <Typography>{'{...}'}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {Object.entries(data).map(([key, value], index) => (
                      <div key={index} style={{ lineHeight: '25px' }}>
                        <b>{`${key}:`}</b> {`${value}`}{' '}
                        {/* Render key-value pairs */}
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </td>
            </tr>
            <tr>
              <th>State Change Hash:</th>
              <td>
                0xbb6d853d16d359ed75700a0cd208d6ebeb96935d05da4fdb97d36c55b15871d6
              </td>
            </tr>
            <tr>
              <th>Event Root Hash:</th>
              <td>
                0xbb6d853d16d359ed75700a0cd208d6ebeb96935d05da4fdb97d36c55b15871d6
              </td>
            </tr>
            <tr>
              <th>Accumulator Root Hash:</th>{' '}
              {/* Typo corrected: "Accmulator" to "Accumulator" */}
              <td>
                0xbb6d853d16d359ed75700a0cd208d6ebeb96935d05da4fdb97d36c55b15871d6
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BodySec3>
  );
}

export default Design2BodySec3;
