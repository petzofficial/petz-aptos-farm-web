import React from 'react';
import styled from 'styled-components/macro'; // Import styled-components/macro once
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../../app/store';

const BellowHeader1 = styled.div`
  width: 100%;
  margin-top: 30px;
  word-break: break-all;
  .wrapwidth {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    @media (max-width: 768px) {
      display: block;
    }
    .leftSec {
      position: relative;
      h1 {
        position: relative;
      }
      p {
        background-color: rgba(241,233,231,1);
        padding: 8px 20px;
        border-radius: 15px;
        svg {
          font-size: 15px;
        }
      }
    }
    .rightSec {
      background-color: rgba(58,52,51,0.05);
      padding: 10px 20px 20px 20px;
      width: 300px;
      border-radius: 15px;
      @media (max-width: 768px) {
        width: 100%;
      }
      h4 {
        position: relative;
      }
      p {
        position: relative;
        padding-bottom: 0;
        margin-bottom: 0;
        line-height: normal;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-top: 0;
        svg {
          font-size: 16px;
        }
      }
    }
  }
`;

interface Props { }

const Design1BellowHeader: React.FC<Props> = () => {
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()
  return (
    <div>
      <BellowHeader1>
        <div className="wrapwidth">
          <div className="leftSec">
            <h1>Account</h1>
            <p>
              0xc0acbd3f0dc1d5361f8315e60fcbc577a41be51f049ca092ae6db7fa8609fab5
              <ContentCopyIcon />
            </p>
          </div>
          <div className="rightSec">
            <h3>2.900239 APT </h3>
            <p>
              Balance <InfoOutlinedIcon />
            </p>
          </div>
        </div>
      </BellowHeader1>
    </div>
  );
};

export default Design1BellowHeader;
