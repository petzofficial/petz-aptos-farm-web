import { FC, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useAppDispatch } from "app/hooks";
import { useAppSelector } from "app/hooks";
import { selectAccount, selectCoins, fetchCoinsAction, selectNewNetwork } from "app/reducers/AccountSlice";
import Image from 'next/image';
import Aptos from "../../../assets/AptosLogo.svg";
import UsdCoinLogo from "../../../assets/UsdCoin.svg";
import WethLogo from "../../../assets/weth.svg";
import SearchIcon from "../../../assets/search.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TetherLogo from "../../../assets/tether.svg";
import CalendarIcon from "../../../assets/calendar.svg"
import Grapglogo from "../../../assets/GraphLogo.svg"
import { SimpleDialog } from "utils/Popups/popups";

const TableDiv = styled("div")`
  width: 100%;
  margin: 30px 0;
  padding: 0px 20px;
  table {
    box-shadow: none;
    border-bottom: none;
    th {
      border-bottom: none;
      svg {
        font-size: 14px;
        margin-left: 10px;
      }
    }
    td {
      border-bottom: none;
      a {
        text-decoration: none;
      }
      img {
        display: inline-block;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        vertical-align: middle;
        span {
          background-color: rgba(241,233,231,1);
          padding: 6px 12px;
          border-radius: 10px;
        }
      }
          
      span {
        background-color: rgba(241,233,231,1);
        padding: 6px 12px;
        border-radius: 10px;
        svg {
          font-size: 14px;
          vertical-align: middle;
        }
      }
    }
  }


}
.rowWrap{
  display:flex;
  border-bottom: 2px solid silver;
  height:80px;
}
.dropdownButton{
  margin-top:18px;
  height:45px;
  background-color: #f1e9e7;
}
.dropdownButton2{
  margin-top:18px;
  height:45px;
  background-color: #f1e9e7;
  margin-left:8px;
}

.sec1{
  background-color:#211c41;
  width:20%;
  height: 600px;
  text-align: center;
  margin-top:30px;
  border-radius:12px;
  margin-right:2%;
}
.main_heading>h3{
  color:#e4e5fa;
  font-size:20px;
}
.main_heading>span{
  color:#e4e5fa;
  font-size:11px;
}
.main_heading{
  padding-top: 40px;
}
.small_img{
  margin: 0px 8px;
  position: relative;
  top: 5px;

}
.label{
  font-size:13px;
  color:#FFFFFF;
  margin-top:10px;
  opacity: .6;
}
.afterheading{
  font-size:13px;
  color:#D4CDED;
}
.afterHeading_Main{
  margin-top:20px;
  display: flex;
  flex-direction: column;
}
.sec1_mainDiv>hr{
  width:60%;
}
.point1{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:60%;
  margin: 0 auto;
}
.point1>span{
  font-weight: 400;
  font-size: 13px;
  color:#FFFFFF;
  line-height: 18px;
  opacity: .6;
}
.point1>p{
  font-size:13px;
  color:#D4CDED;
  font-weight: 600;
  line-height: 18px;
  text-align:start;
}
.card_button{
  font-size:100px
  width: 100px;
  height:43px;
  border-radius:5px;
  background-color: #43395b;
  margin-top: 10px;
  color:#ffffff;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.card_button:hover{
  background-color: #8d29c1;
  // -webkit-background: linear-gradient(90deg,#6e42ca 0%,#8d29c1 100%);
  // -moz-background: linear-gradient(90deg,#6e42ca 0%,#8d29c1 100%);
  // -o-background: linear-gradient(90deg,#6e42ca 0%,#8d29c1 100%);
  // background: linear-gradient(90deg,#6e42ca 0%,#8d29c1 100%);
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.point1>p>img{
  margin-left:6px;
  position:relative;
  top:4px
}
.CardsMaindiv{
  display:flex;
  justify-content: center;
  align-items: center;
}
.main_heading>span>img{
  margin-right:2px;
  position: relative;
  top:4px;
}
.searchBar{
  width:100%;
  height:45px;
  background-color: #f5f5f5;
  border:1px solid grey;
  padding:12px 12px 12px 48px;
  border-radius: 10px;
  margin-left:0px;
}
.search_icon{
  position: relative;
  top: 34px;
  left: 30px;
}
.sec1_mainDiv>img{
  position:relative;
  top:34px;
}
.search {
  width: 400px;
  border: none;
  position: relative;
  top: 10px;
  .search_icon{
    position: relative;
    top: 34px;
    left: 30px;
  }
}
.headBtmSearch{
  max-width: 1024px;
  width: 100%;
  margin-left: auto;
  padding: 0px 0px;
}
  .headBtmSearch .headBtmSearch1, .headBtmSearch .headBtmSearch2{
    display: inline-block;
    margin-left: 20px;
  }
  .cardbuttons_main {
    width: 96%;
    display: block;
    margin: 15px auto 0px;
    button{
      font-size: 13px;
      display: inline-block;
      width: 31%;
      margin: 5px 1%;
      max-width: 31%;
      min-width: auto !important;
    }
}
 
`;


const FarmsTable: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [selectedFarm, setSelectedFarm] = React.useState<string | null>("All Farms");
  const [selectedType, setSelectedType] = React.useState<string | null>("Active");
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const dispatch = useAppDispatch();
  const account = useAppSelector(selectAccount)
  const newNetwork = useAppSelector(selectNewNetwork)
  useEffect(() => {
    dispatch(fetchCoinsAction(account?.address))
  }, [dispatch, account, newNetwork])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl1(null);
  };

  const handleMenuItemClick = (itemName: string) => {
    setSelectedFarm(itemName);
    handleClose();
  };
  const handleFarmValidityClick = (itemName: string) => {
    setSelectedType(itemName);
    handleClose2();
  };

  const handleShowPopup = () => {
    setShowPopup(true)
  }
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="headBtmSearch">
        <div className="headBtmSearch2">
          <Button
            id="fade-button"
            className="dropdownButton"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : 'false'}
            onClick={handleClick}
            sx={{
              color: "#000",
              textTransform: 'capitalize',
              fontWeight: '500',
              fontSize: '18px',
              verticalAlign: 'middle',
              lineHeight: 'normal',
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {selectedFarm}
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
          >
            <MenuItem
              onClick={() => handleMenuItemClick("All Farms")}
              sx={{
                width: "200px",
                "&:hover": { borderRadius: "10px", backgroundColor: "#e4e4e7" },
                margin: '8px 10px',
                color: '#121615',
                borderRadius: "10px", backgroundColor: "#f6efef"
              }}
            >
              <ListItemText>All Farms</ListItemText>
            </MenuItem>
            <MenuItem

              onClick={() => handleMenuItemClick("My Farms")}
              sx={{
                width: "200px",
                "&:hover": { borderRadius: "10px", backgroundColor: "#e4e4e7" },
                margin: '5px 10px',
                color: '#121615',
                borderRadius: "10px", backgroundColor: "#f6efef"
              }}
            >
              <ListItemText>My Farms</ListItemText>
            </MenuItem>
          </Menu>


          <Button
            id="fade-button2"
            className="dropdownButton2"
            aria-controls={open1 ? 'fade-menu2' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : 'false'}
            onClick={handleClick2}
            sx={{
              color: "#000",
              textTransform: 'capitalize',
              fontWeight: '500',
              fontSize: '18px'
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {selectedType}
          </Button>
          <Menu
            id="fade-menu2"
            MenuListProps={{
              'aria-labelledby': 'fade-button2',
            }}
            anchorEl={anchorEl1}
            open={open1}
            TransitionComponent={Fade}
          >

            <MenuItem
              onClick={() => handleFarmValidityClick("Active")}
              sx={{
                width: "200px",
                "&:hover": { borderRadius: "10px", backgroundColor: "#e4e4e7" },
                margin: '8px 10px',
                color: '#121615',
                borderRadius: "10px", backgroundColor: "#f6efef"
              }}
            >
              <ListItemText>Active</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => handleFarmValidityClick("Expired")}
              sx={{
                width: "200px",
                "&:hover": { borderRadius: "10px", backgroundColor: "#e4e4e7" },
                margin: '5px 10px',
                color: '#121615',
                borderRadius: "10px", backgroundColor: "#f6efef"
              }}
            >
              <ListItemText>Expired</ListItemText>
            </MenuItem>
          </Menu>
        </div>

        <div className="search headBtmSearch2">
          <Image src={SearchIcon} alt="logo" className="search_icon" style={{ width: 16, height: 16 }} />
          <input className="searchBar" type="search" placeholder="Search Pools" />
        </div>
      </div>
      <TableDiv>
        <TableContainer component={Paper} elevation={0}>
          <MuiTable sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableBody>
              <hr />
              <div className="CardsMaindiv">

                <div className="sec1">
                  <div className="sec1_mainDiv">
                    <Image src={Aptos} alt="logo" className="" style={{ width: 46, height: 46 }} />
                    <Image src={TetherLogo} alt="logo" className="" style={{ width: 46, height: 46, marginLeft: -10, }} />
                    <div className="main_heading">
                      <h3>USDT/APT</h3>
                      <span><Image src={Grapglogo} alt="logo" className="graph_logo" style={{ width: 15, height: 15 }} />Uncorellated</span>
                    </div>
                    <div className="afterHeading_Main">
                      <span className="afterheading">0.00005962<Image src={Aptos} alt="logo" className="small_img" style={{ width: 18, height: 18, }} />APT</span>
                      <span className="label">Per week per 1 LP</span>
                    </div>
                    <hr />
                    <div className="bottSec_Main">
                      <div className="point1">
                        <span>NFT:</span>
                        <p>Pontem Dark Ages</p>
                      </div>

                      <div className="point1">
                        <span>APR:</span>
                        <p>2.2%</p>
                      </div>

                      <div className="point1">
                        <span>TVL:</span>
                        <p>$18,868</p>
                      </div>
                      <div className="point1">
                        <span>Time Left:</span>
                        <p>4M 18W 6D<Image src={CalendarIcon} alt="logo" className="" style={{ width: 18, height: 18, }} /></p>
                      </div>
                    </div>
                    <hr />
                    <div className="cardbuttons_main">
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Coin Stake
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}

                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                        onClick={handleShowPopup}
                      >
                        Stake
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                        onClick={handleShowPopup}
                      >
                        Unstake
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}

                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Coin earned
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Harvest
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="sec1">
                  <div className="sec1_mainDiv">
                    <Image src={Aptos} alt="logo" className="" style={{ width: 46, height: 46 }} />
                    <Image src={WethLogo} alt="logo" className="image_border" style={{ width: 46, height: 46, marginLeft: -10, }} />
                    <div className="main_heading">
                      <h3>WETH/APT</h3>
                      <span><Image src={Grapglogo} alt="logo" className="graph_logo" style={{ width: 15, height: 15 }} />Uncorellated</span>
                    </div>
                    <div className="afterHeading_Main">
                      <span className="afterheading">0.00276707<Image src={Aptos} alt="logo" className="small_img" style={{ width: 18, height: 18, }} />APT</span>
                      <span className="label">Per week per 1 LP</span>
                    </div>
                    <hr />
                    <div className="bottSec_Main">
                      <div className="point1">
                        <span>NFT:</span>
                        <p>Pontem Space Pirates</p>
                      </div>
                      <div className="point1">
                        <span>APR:</span>
                        <p>3.04%</p>
                      </div>
                      <div className="point1">
                        <span>TVL:</span>
                        <p>$14,911</p>
                      </div>
                      <div className="point1">
                        <span>Time Left:</span>
                        <p>4M 18W 6D <Image src={CalendarIcon} alt="logo" className="" style={{ width: 18, height: 18, }} /></p>
                      </div>
                    </div>
                    <hr />
                    <div className="cardbuttons_main">
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}

                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Coin Stake
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                        onClick={handleShowPopup}
                      >
                        Stake
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                        onClick={handleShowPopup}
                      >
                        Unstake
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Coin earned
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Harvest
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="sec1">
                  <div className="sec1_mainDiv">
                    <Image src={Aptos} alt="logo" className="" style={{ width: 46, height: 46 }} />
                    <Image src={UsdCoinLogo} alt="logo" className="" style={{ width: 70, height: 46, marginLeft: -20, }} />
                    <div className="main_heading">
                      <h3>USDC/APT</h3>
                      <span><Image src={Grapglogo} alt="logo" className="graph_logo" style={{ width: 15, height: 15 }} />Uncorellated</span>
                    </div>
                    <div className="afterHeading_Main">
                      <span className="afterheading">0.00001986<Image src={Aptos} alt="logo" className="small_img" style={{ width: 18, height: 18, }} />APT</span>
                      <span className="label">Per week per 1 LP</span>
                    </div>
                    <hr />
                    <div className="bottSec_Main">
                      <div className="point1">
                        <span>NFT:</span>
                        <p>Pontem Space Pirates</p>
                      </div>
                      <div className="point1">
                        <span>APR:</span>
                        <p>0.92%</p>
                      </div>
                      <div className="point1">
                        <span>TVL:</span>
                        <p>495,873</p>
                      </div>
                      <div className="point1">
                        <span>Time Left:</span>
                        <p>4M 18W 6D <Image src={CalendarIcon} alt="logo" className="" style={{ width: 18, height: 18, }} /></p>
                      </div>
                    </div>
                    <hr />
                    <div className="cardbuttons_main">
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Coin staked
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                        onClick={handleShowPopup}
                      >
                        Stake
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}

                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                        onClick={handleShowPopup}
                      >
                        Unstake
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}

                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Coin earned
                      </Button>
                      <Button
                        id="fade-button"
                        className="card_button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : 'false'}
                        sx={{
                          color: "#000",
                          textTransform: 'capitalize',
                          fontWeight: '500',
                          fontSize: '18px'
                        }}
                      >
                        Harvest
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TableBody>
          </MuiTable>
        </TableContainer>
      </TableDiv>
      <SimpleDialog open={showPopup} onClose={handleClosePopup} />
    </div>
  );
}

export default FarmsTable;
