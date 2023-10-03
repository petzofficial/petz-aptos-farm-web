import React, { FC, useEffect, useState } from "react";
import Logo from '../../../assets/logo.png';
import styled from 'styled-components/macro';
import Link from 'next/link';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Image from 'next/image'
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { setNewNetwork } from "app/reducers/AccountSlice";
import { useAppDispatch } from "app/hooks";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { setAccount } from 'app/reducers/AccountSlice';
import { Box, ListItemText, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from "next/router";

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
  const dispatch = useAppDispatch()
  // const account = useAppSelector(selectAccount)
  const {
    wallet,
    account,
    network,
    wallets
  } = useWallet();
  const netWorkChangeSet = wallets[0]?.provider?.eventCallbacks?.networkChange


  useEffect(() => {
    network && dispatch(setNewNetwork(network.name))
  }, [network])


  // if (netWorkChangeSet && netWorkChangeSet.size > 0) {
  //   const networkChangeFunction = Array.from(netWorkChangeSet)[0];
  //   console.log("networkChangeFunction", networkChangeFunction);
  // } else {
  //   console.log('networkChange set is empty or undefined');
  // }

  // const moduleAddress = "0x1";
  // const nftModuleAddress = "0x3";
  // const moduleAddress = "0x1";
  // const nftModuleAddress = "0x3";

  useEffect(() => {
    dispatch(setAccount(account || null!))
  }, [account?.address]);


  // const fetchList = async () => {
  //   if (!account) return [];
  //   try {
  //     const transactionResource = await provider.getAccountTransactions(
  //       account?.address
  //     );

  //     const coinResource = await provider.getAccountResource(
  //       account?.address,
  //       `${moduleAddress}::coin::CoinStore<${moduleAddress}::aptos_coin::AptosCoin>`,
  //     );

  //     const nftResource = await provider.getOwnedTokens(
  //       account?.address
  //     );
  //     const nftResource = await provider.getOwnedTokens(
  //       account?.address
  //     );

  //     const faResource = await provider.getAccountCoinsData(
  //       account?.address
  //     );
  //     const faResource = await provider.getAccountCoinsData(
  //       account?.address
  //     );

  //     const resource = await provider.getAccountResources(
  //       account?.address
  //     );
  //     const resource = await provider.getAccountResources(
  //       account?.address
  //     );

  //     console.log(transactionResource)
  //     //  console.log(coinResource)
  //     console.log(faResource)
  //     console.log(nftResource)
  //     // console.log(resource)
  //     console.log(transactionResource)
  //     //  console.log(coinResource)
  //     console.log(faResource)
  //     console.log(nftResource)
  //     // console.log(resource)

  //   } catch (e: any) {

  //   }
  // };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // const router = useRouter();
  const handleClose = () => {
    // router.push(`/tokens/${account?.address}`);
    setAnchorEl(null);
  };


  // const handleNetworkChange = () => {

  //   if (netWorkChangeSet) {
  //     const customNetwork = {
  //       chainId: '1',
  //       name: 'Mainnet',
  //       url: 'https://fullnode.mainnet.aptoslabs.com',
  //     };
  //     try {
  //       const networkChangeFunction = Array.from(netWorkChangeSet)[0] as any;
  //       networkChangeFunction(customNetwork?.name)
  //     } catch (err) {
  //       console.log("err", err)
  //     }
  //   }
  // }
  return (
    <div>
      <HeaderDiv>
        <div className="wrapwith">
          <div className="logo">
            <Link href="/">
              <Image src={Logo} alt="logo" style={{ width: 60, height: 60 }} />
            </Link>
          </div>
          <div className="headerRightSec">
            <div className="headerRight1">
              {/* <ul>
                <li>
                  <Link href="/transactions">{account?.address} Transaction</Link>
                </li>
              </ul> */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  typography: 'body1',
                  '& > :not(style) ~ :not(style)': {
                    ml: 2,
                  },
                }}
              >

                {/*    <span>{account?.address} <Link href={"/"}>Transaction</Link></span> */}


                {network && (

                  <><Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                    onClick={handleClick}
                    sx={{
                      color: "#000",
                      textTransform: 'capitalize',
                      fontWeight: '500',
                      fontSize: '18px'
                    }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    {network?.name}
                  </Button><Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={{
                      width: "250px",
                      "&:hover": { borderRadius: "15px" },
                    }}
                  >
                      {/* <MenuItem
    onClick={handleClose}
    sx={{
      display: "flex",
      justifyContent: 'space-between',
      width: "200px",
      margin: '0px 10px',
      "&:hover": {
        backgroundColor: "transparent",
        borderRadius: "15px",
        color: '#121615',
      }
    }}
  >

    <Typography variant="body2" color="text.disabled">
      Network
    </Typography>
    <Typography variant="body2" color="text.disabled">
      Chain Id
    </Typography>
  </MenuItem> */}
                      <MenuItem onClick={() => {
                        handleClose;
                        const payload = {
                          Name: "Mainnet",
                          chainId: "1",
                          url: "https://fullnode.mainnet.aptoslabs.com"
                        };
                        // handleNetworkChange(payload);
                      }}
                        sx={{
                          width: "200px",
                          "&:hover": { borderRadius: "15px", backgroundColor: "#e4e4e7" },
                          margin: '0px 10px',
                          color: '#121615',
                        }}
                      >
                        <ListItemText>Mainnet</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          1
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={() => {
                        handleClose;
                        // handleNetworkChange('Testnet');
                      }}
                        sx={{
                          width: "200px",
                          "&:hover": { borderRadius: "15px", backgroundColor: "#e4e4e7" },
                          margin: '0px 10px',
                          color: '#121615',
                        }}
                      >
                        <ListItemText>Testnet</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          2
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={() => {
                        handleClose;
                        // handleNetworkChange('Devnet');
                      }} sx={{
                        width: "200px",
                        "&:hover": { borderRadius: "15px", backgroundColor: "#e4e4e7" },
                        margin: '0px 10px',
                        color: '#121615',
                      }}>
                        <ListItemText>Devnet</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                          80
                        </Typography>
                      </MenuItem>
                    </Menu></>
                )}


              </Box>
            </div>
            <div className="headerRight">
              <WalletSelector />
            </div>
          </div>
        </div>
      </HeaderDiv>
    </div>
  );
};

export default Header;
