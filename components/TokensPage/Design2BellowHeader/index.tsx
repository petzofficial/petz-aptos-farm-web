import { FC } from 'react';
import styled from 'styled-components/macro';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Image from 'next/image';
import { useAppSelector } from 'app/hooks';
import { selectAccount } from 'app/reducers/AccountSlice';

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

interface Props {
  specificToken: any
}

const Design2BellowHeader: FC<Props> = (props) => {
  const userAccount = useAppSelector(selectAccount) as any
  const { specificToken } = props
  return (
    <div>
      <HeaderDiv>
        <div className="wrapwidth">
          <div className="leftSec">
            <h1>Token</h1>
            <p>
              {userAccount?.address}
              <ContentCopyIcon style={{ cursor: "pointer" }} onClick={() => {
                navigator.clipboard.writeText(userAccount?.address);
              }} />
            </p>
          </div>
          <div className="rightSec">
            <Image src={specificToken?.image} width="250" height="250" className='tokenImage' alt="" />
          </div>
        </div>
      </HeaderDiv>
    </div>
  );
};

export default Design2BellowHeader;
