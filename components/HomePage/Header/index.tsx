import React, { FC, useEffect } from "react";
import Logo from '../../../assets/logo.png';
import styled from 'styled-components/macro';
import Link from 'next/link';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Image from 'next/image'
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { selectNewNetwork, setNewNetwork } from "app/reducers/AccountSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { setAccount } from 'app/reducers/AccountSlice';
import { Box, ListItemText, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

const Networks = [{
  name: "Mainnet",
  chainId: 1
}, {
  name: "Testnet",
  chainId: 2
}, {
  name: "Devnet",
  chainId: 80
}]

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const newNetwork = useAppSelector(selectNewNetwork)
  const {
    account,
    network,
  } = useWallet();


  useEffect(() => {
    network && dispatch(setNewNetwork(network.name))
  }, [network])


  useEffect(() => {
    dispatch(setAccount(account || null!))
  }, [account?.address]);


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleNetworkChange = (network: string) => {
    dispatch(setNewNetwork(network))
  }

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
                {newNetwork && (

                  <>
                    <Button
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
                      {newNetwork}
                    </Button>
                    <Menu
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
                      {Networks.map(({ name, chainId }) => (
                        <MenuItem
                          key={chainId}
                          onClick={() => handleNetworkChange(name)}
                          sx={{
                            width: "200px",
                            "&:hover": { borderRadius: "15px", backgroundColor: "#e4e4e7" },
                            margin: '0px 10px',
                            color: '#121615',
                            ...(newNetwork === name ? { borderRadius: "15px", backgroundColor: "#f6efef" } : {})
                          }}
                        >
                          <ListItemText>{name}</ListItemText>
                          <Typography variant="body2" color="text.secondary">
                            {chainId}
                          </Typography>
                        </MenuItem>

                      ))}
                    </Menu>
                  </>
                )}
              </Box>
            </div>
            <div className="headerRight">
              <WalletSelector />
            </div>
          </div>
        </div>
      </HeaderDiv >
    </div >
  );
};

export default Header;
