import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import DiscordIcon from "../../assets/discord.svg";
import Linkedin from "../../../assets/linkedin.svg";
import Twitter from "../../../assets/twitter.svg";
import Github from "../../../assets/github.svg";
import Medium from "../../../assets/medium.svg";
import Reddit from "../../../assets/reddit.svg";
import Telegram from "../../../assets/telegram.svg";
import Doc from "../../../assets/doc.svg";
import FooterLogo from "../../../assets/logo.png";
import styled from "styled-components/macro"; // Add this import
import Link from "next/link";
import Image from "next/image";

const FooterDiv = styled.div`
  width: 100%;
  margin: 20px 0 20px;
  display: inline-block;
  padding: 0px 20px;
  .wrapwidth {
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      display: block;
      align-items: center;
    }
    align-items: center
    padding: 10px 20px;
    .footer_left {
      position: relative;
      img{
        @media (max-width: 768px) {
          display: block;
          align-items: center;
          margin: auto;
        }
      }
      p{
        @media (max-width: 768px) {
          text-align: center;
          margin: 17px 0px;
        }
      }
      ul{
        margin: 0;
        padding: 0;
        @media (max-width: 768px) {
          text-align: center;
        }
        li{
          display: inline-block;
          margin: 0px 10px 0px 0px;
          @media (max-width: 768px) {
            margin: 0px 10px 10px;
          }
          a{
            text-decoration; underline;
            color: rgba(0,0,0,1);
          }
        }
      }
    }
    .footer_right {
      ul {
        margin: 0;
        padding: 0;
        @media (max-width: 768px) {
          text-align: center;
        }
        li {
          list-style: none;
          display: inline-block;
          margin-left: 10px;
          vertical-align: middle;
          a {
            text-decoration; none;
            img{
              display: inline-block;
              width: 24px;
              vertical-align: middle;
              height: auto;
            }
          }
        }
      }
    }
  }
`;

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div>
      <FooterDiv>
        <div className="wrapwidth">
          <div className="footer_left">
            <Link href="/">
              <Image
                priority
                src={FooterLogo}
                alt=""
                style={{ width: 60, height: 60 }}
              />
            </Link>
            <p>Copyright &copy; 2023 PetZ Money</p>
            {/* <div className="">
              <ul>
                <li style={{ borderBottom: "1px solid #000" }}>
                  <Link href="/#">Privacy</Link>
                </li>
                <li style={{ borderBottom: "1px solid #000" }}>
                  <Link href="/#">Terms</Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="footer_right">
            <ul>
              <li>
                <Link href="https://twitter.com/PetzOfficial">
                  <Image src={Twitter} alt="asd" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/petz-money">
                  <Image src={Linkedin} alt="asd" />
                </Link>
              </li>
              <li>
                <Link href="https://t.me/petz_money">
                  <Image src={Telegram} alt="asd" />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/petzofficial">
                  <Image src={Github} alt="asd" />
                </Link>
              </li>
              <li>
                <Link href="https://docs.petz.money/">
                  <Image src={Doc} alt="asd" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </FooterDiv>
    </div>
  );
};

export default Footer;
