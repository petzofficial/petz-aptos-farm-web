import { FC } from "react";
import Logo from '../../../assets/logo.png';
import headerRight from '../../../assets/header_right.png';
import styled from 'styled-components/macro';
import Link from 'next/link';
import Image from 'next/image'

const HeaderDiv = styled.div`
  width: 100%;
  .wrapwith {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    @media (max-width: 768px) {
      display: block;
    }
    .logo {
      @media (max-width: 768px) {
        margin: 0px auto 20px;
      }
      a {
        img {
          display: block;
          max-width: 100%;
          @media (max-width: 768px) {
            display: block;
            align-items: center;
            margin: auto;
          }
        }
      }
    }
    .headerRightSec {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        display: block;
        text-align: center;
      }
      .headerRight1 {
        margin: 0px 30px;
        ul {
          margin: 0;
          padding: 0;
          li {
            list-style: none;
            margin: 10px 0px;
            a {
              text-decoration: none;
              color: #000;
              font-weight: 500;
              font-size: 18px;
              &:hover {
                color: rgb(128, 128, 128);
              }
            }
          }
        }
      }
      .headerRight {
        display: flex;
        background-color: rgba(58,52,51,0.12);
        padding: 7px 20px;
        border-radius: 10px;
        align-content: center;
        align-items: center;
        @media (max-width: 768px) {
          display: block;
          text-align: center;
        }
        img {
          object-fit: contain;
          object-position: center;
          @media (max-width: 768px) {
            display: inline-block;
          }
        }
        p {
          color: #000;
          font-size: 14px;
          margin-left: 10px;
          font-weight: 500;
          @media (max-width: 768px) {
            display: inline-block;
          }
        }
      }
    }
  }
`;



const Header: FC = () => {
  return (
    <div>
      <HeaderDiv>
        {' '}
        {/* Changed to HeaderDiv */}
        <div className="wrapwith">
          <div className="logo">
            <Link href="/">
              <Image src={Logo} alt="logo" style={{ width: 60, height: 60 }}/>
            </Link>
          </div>
          <div className="headerRightSec">
            <div className="headerRight1">
              <ul>
                <li>
                  <Link href="/transactions">Transactions</Link>
                </li>
              </ul>
            </div>
            <div className="headerRight">
              <Image src={headerRight} alt="textRight" />
              <p>0XC0AC...FAB5</p>
            </div>
          </div>
        </div>
      </HeaderDiv>{' '}
      {/* Changed to HeaderDiv */}
    </div>
  );
};

export default Header;
