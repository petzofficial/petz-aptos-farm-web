import React from 'react';
import styled from 'styled-components/macro';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// Remove the duplicate import of styled from 'styled-components/macro';

const HeaderDiv = styled.div`
  width: 100%;
  margin-top: 30px;
  word-break: break-all;
  .wrapwidth {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .leftSec {
      position: relative;
      h1 {
        position: relative;
      }
      p {
        background-color: #f1e9e7;
        padding: 8px 20px;
        border-radius: 15px;
        svg {
          font-size: 15px;
        }
      }
    }
    .rightSec {
      background-color: #fff;
      padding: 10px 20px 10px 20px;
      width: 300px;
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

const Design2BellowHeader: React.FC<Props> = () => {
  return (
    <div>
      <HeaderDiv>
        <div className="wrapwidth">
          <div className="leftSec">
            <h1>Transaction</h1>
            <p>
              0xc0acbd3f0dc1d5361f8315e60fcbc577a41be51f049ca092ae6db7fa8609fab5
              <ContentCopyIcon />
            </p>
          </div>
        </div>
      </HeaderDiv>
    </div>
  );
};

export default Design2BellowHeader;
