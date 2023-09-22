import React from 'react';
import styled from 'styled-components/macro';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Image from 'next/image';
import ImageNFT from "../../../assets/0.png"
// Remove the duplicate import of styled from 'styled-components/macro';

const HeaderDiv = styled.div`
  width: 100%;
  margin-top: 30px;
  word-break: break-all;
  .wrapwidth {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      text-align: right;
      @media (max-width: 768px) {
        width: auto;
        text-align: center;
      }
      .tokenImage{
        max-width: 100%;
        width: 150px;
        height: auto;
        text-align: right;
        @media (max-width: 768px) {
          display: inline-block;
          align-items: center !important; 
          margin: auto;
        }
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

const Design2BellowHeader: React.FC<Props> = () => {
  return (
    <div>
      <HeaderDiv>
        <div className="wrapwidth">
          <div className="leftSec">
            <h1>Token</h1>
            <p>
              0xc0acbd3f0dc1d5361f8315e60fcbc577a41be51f049ca092ae6db7fa8609fab5
              <ContentCopyIcon />
            </p>
          </div>
          <div className="rightSec">
            <Image src={"https://nft.petz.money/v1/0.png"} width="100" height="100" className='tokenImage' alt="" />
          </div>
        </div>
      </HeaderDiv>
    </div>
  );
};

export default Design2BellowHeader;
