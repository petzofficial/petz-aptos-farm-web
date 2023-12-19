import React, { FC, useEffect, useState } from "react";
import Logo from "../../../assets/logo.png";
import Hamburger from "../../../assets/hamburger.svg";
import CloseIcon from "../../../assets/blackCloseButton.svg";
import styled from "styled-components/macro";
import Link from "next/link";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import Image from "next/image";
// import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { selectNewNetwork, setNewNetwork } from "app/reducers/AccountSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { setAccount } from "app/reducers/AccountSlice";
import {
  Box,
  ClickAwayListener,
  Grow,
  ListItemText,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { WalletSelector } from "components/WalletSelector";

const HeaderDiv = styled.div`
  width: 100%;
  position: relative;
  .wrapwith {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;
    // @media (max-width: 768px) {
    //   display: block;
    // }
    .logo {
      @media (max-width: 768px) {
        // margin: 0px auto 20px;
      }
      a {
        img {
          display: block;
          max-width: 100%;
          // @media (max-width: 768px) {
          //   display: block;
          //   align-items: center;
          //   margin: auto;
          // }
        }
      }
    }
    .headerRightSec {
      display: flex;
      align-items: center;
      position: relative;
      @media (max-width: 768px) {
        // display: block;
        text-align: center;
      }
      .headerRight1 {
        margin: 0px 30px;
        @media screen and (max-width: 900px) {
          margin: 0;
        }
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
        @media (max-width: 900px) {
          display: none;
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

  .navFarmBTN {
    padding: 6px 8px;
  }
  .navBtn {
    margin-top: 5px;
    @media screen and (max-width: 768px) {
      margin-top: 16px;
    }

    @media screen and (max-width: 540px) {
      text-align: center;
    }
  }
  .Hamburger {
    // position: absolute;
    // top: 25px;
    // right: 15px;
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
  }
  .navBtn a,
  .navBtn button {
    margin-left: 50px;
    display: inline-block;
    @media screen and (max-width: 1101px) {
      margin-left: 35px;
    }
    @media screen and (max-width: 1012px) {
      margin-left: 15px;
    }
    @media screen and (max-width: 900px) {
      // margin: 5px;
      margin: 0px;
    }
  }
  .navBtn a {
    @media (max-width: 900px) {
      display: none;
    }
  }
  .walletWrapper {
    border-top: 2px solid #f1e9e7;
    width: 100%;
    margin: auto;
    padding: 10px;
    text-align: center;
  }
  .abc {
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: row-reverse;
    }
  }
  .navBtn {
    @media screen and (max-width: 900px) {
      margin-top: -2px;
    }
  }
`;

const Networks = [
  {
    name: "Mainnet",
    chainId: 1,
  },
  {
    name: "Testnet",
    chainId: 2,
  },
  {
    name: "Devnet",
    chainId: 80,
  },
];

const MenuTabs = [
  {
    name: "Account",
    Id: 1,
  },
  {
    name: "Farms",
    Id: 2,
  },
];

const Header: FC = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  // *********
  const [openPopper, setOpenPopper] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpenPopper((prevOpen) => !prevOpen);
  };
  const handlePopperClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenPopper(false);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenPopper(false);
    } else if (event.key === "Escape") {
      setOpenPopper(false);
    }
  }
  const prevOpen = React.useRef(openPopper);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [openPopper]);
  // *******
  const dispatch = useAppDispatch();
  const newNetwork = useAppSelector(selectNewNetwork);
  const { account, network, connected, connect, disconnect, wallet } =
    useWallet();
  const walletInfo = useWallet();
  const router = useRouter();

  // ************Fix wallet disconnect issue on refresh************
  // useEffect(() => {
  //   const currentWalletString = localStorage.getItem("currentWallet");
  //   const currentWallet = currentWalletString
  //     ? JSON.parse(currentWalletString)
  //     : null;
  //   if (currentWallet && currentWallet.wallet && currentWallet.wallet.name) {
  //     connect(currentWallet.wallet.name);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (connected) {
  //     localStorage.setItem(
  //       "currentWallet",
  //       JSON.stringify({
  //         account,
  //         network,
  //         connected,
  //         wallet,
  //       })
  //     );
  //   } else {
  //   }
  // }, [connected]);
  // ****************************
  useEffect(() => {
    network && dispatch(setNewNetwork(network.name));
  }, [network]);

  useEffect(() => {
    dispatch(setAccount(account || null!));
  }, [account?.address]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseTabsDropDown = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const handleNetworkChange = (network: string) => {
    dispatch(setNewNetwork(network));
  };

  const handleTabChange = (name: string) => {
    if (name === "account") {
      router.push(`/account`);
    } else if (name === "farms") {
      router.push(`/farms`);
    } else if (name === "swap") {
      router.push(`https://liquidswap.com/`);
    } else if (name === "bridge") {
      router.push(`https://bridge.liquidswap.com/`);
    } else if (name === "liquidity") {
      router.push(`https://liquidswap.com/#/pools`);
    }
    setisMenuOpen(!isMenuOpen);
    setOpenPopper(false);
  };

  return (
    <div>
      <HeaderDiv>
        <div className="wrapwith">
          <div className="logo">
            <Link href="/">
              <Image
                priority
                src={Logo}
                alt="logo"
                style={{ width: 60, height: 60 }}
              />
            </Link>
          </div>

          <div className="abc">
            <div className="Hamburger">
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={isMenuOpen ? "composition-menu" : undefined}
                aria-expanded={isMenuOpen ? "true" : undefined}
                aria-haspopup="true"
                onClick={() => {
                  handleToggle(), handleCloseTabsDropDown();
                }}
              >
                <Image
                  src={!isMenuOpen ? Hamburger : CloseIcon}
                  alt="logo"
                  style={{ width: 21, height: 21 }}
                />
              </Button>
              <Popper
                open={isMenuOpen}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{
                  border: "1px solid transparent",
                  zIndex: "9999",
                  width: "230px",
                }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handlePopperClose}>
                        <MenuList
                          autoFocusItem={openPopper}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={() => handleTabChange("swap")}>
                            Swap
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleTabChange("liquidity")}
                          >
                            Liquidity
                          </MenuItem>
                          <MenuItem onClick={() => handleTabChange("farms")}>
                            Farms
                          </MenuItem>
                          <MenuItem onClick={() => handleTabChange("bridge")}>
                            Bridge
                          </MenuItem>
                          <MenuItem onClick={() => handleTabChange("account")}>
                            Account
                          </MenuItem>
                          <div className="walletWrapper">
                            <WalletSelector />
                          </div>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            <div className="headerRightSec">
              <div className="headerRight1">
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    // typography: "body1",
                  }}
                >
                  <>
                    <div className="navBtn">
                      <Link
                        className="navFarmBTN"
                        href="https://liquidswap.com/"
                        target="_blank"
                      >
                        <span>Swap</span>
                      </Link>
                      <Link
                        className="navFarmBTN"
                        href="https://liquidswap.com/#/pools"
                        target="_blank"
                      >
                        <span>Liquidity</span>
                      </Link>
                      <Link className="navFarmBTN" href="/farms">
                        <span>Farms</span>
                      </Link>
                      <Link
                        className="navFarmBTN"
                        href="https://bridge.liquidswap.com/ "
                        target="_blank"
                      >
                        <span>Bridge</span>
                      </Link>
                      <Link className="navFarmBTN" href="/account">
                        <span>Account</span>
                      </Link>

                      <Button
                        id="fade-button"
                        aria-controls={open ? "fade-menu3" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : "false"}
                        onClick={handleClick}
                        sx={{
                          color: "#000",
                          textTransform: "capitalize",
                          fontWeight: "500",
                          fontSize: "18px",
                        }}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {newNetwork ? newNetwork : "Networks"}
                      </Button>
                    </div>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                      className="walletWrapper"
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
                            "&:hover": {
                              borderRadius: "15px",
                              backgroundColor: "#e4e4e7",
                            },
                            margin: "0px 10px",
                            color: "#121615",
                            ...(newNetwork === name
                              ? {
                                  borderRadius: "15px",
                                  backgroundColor: "#f6efef",
                                }
                              : {}),
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
                </Box>
              </div>
              <div className="headerRight">
                <WalletSelector />
              </div>
            </div>
          </div>
        </div>
      </HeaderDiv>
    </div>
  );
};

export default Header;
