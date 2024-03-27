import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { useAppSelector } from "app/hooks";
import {
  selectAccount,
  fetchCoinsAction,
  selectNewNetwork,
  selectTransactions,
} from "app/reducers/AccountSlice";
import { styled } from "@mui/material/styles";
import { StackedPopup } from "components/FarmComponents/Popups/stakedPopup";
import Aptos from "../../../assets/AptosLogo.svg";
import UsdCoinLogo from "../../../assets/UsdCoin.svg";
import WethLogo from "../../../assets/weth.svg";
import TetherLogo from "../../../assets/tether.svg";
import Grapglogo from "../../../assets/GraphLogo.svg";
import { UnstackedPopup } from "components/FarmComponents/Popups/unstakedPopup";
import ErrorPage from "components/ErrorPage/ErrorPage";
import ReactPaginate from "react-paginate";
import FarmCardTemplate from "components/FarmComponents/FarmCardTemplate/FarmCardTemplate";
import { ICardData2 } from "types/cardsTypes";
import SearchBar from "components/FarmComponents/SearchBar";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { getWalletNetwork } from 'utils/aptosNetWorks/AptosNetworks';


const TableDiv = styled("div")`
  width: 100%;
  margin-bottom: 15px;
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
  height:45px;
  background-color: #f1e9e7;
}
.dropdownButton2{
  height:45px;
  background-color: #f1e9e7;
  margin-left:8px;
}

.sec1{
  background-color:#f1e9e7;
  width:26%;
  height: auto;
  text-align: center;
  margin-top:30px;
  border-radius:12px;
  margin-right:2%;
  @media screen and (max-width: 850px){
    width: 48%;
    margin: 10px 1%;
    display: inline-block;
  }
  @media screen and (max-width: 667px){
    width: 98%;
  }
}
.main_heading>h3{.cardbuttons_main
  color:#000;
  font-size:20px;
  margin: 10px
}
.main_heading>span{
  color:#000;
  font-size:11px;
}
.main_heading{
  padding-top: 20px;
}
.small_img{
  margin: 0px 8px;
  position: relative;
  top: 5px;

}
.label{
  font-size:13px;
  color:#000;
  margin-top:10px;
  opacity: .6;
}
.afterheading{
  font-size:13px;
  color:#000;
}
.afterHeading_Main{
  margin-top: 10px;
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
  color:#000;
  line-height: 18px;
  opacity: .6;
}
.point1>p{
  font-size:13px;
  color:#000;
  font-weight: 600;
  line-height: 18px;
  text-align:start;
  margin: 4px
}
.card_button{
  font-size:100px
  width: 100px;
  height:40px;
  border-radius:5px;
  background-color: #f49c63;
  margin-top: 10px;
  color:#ffffff;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.card_button:hover{
  background-color: #f1e9e7;
  color:#000;
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
  flex-wrap: wrap;
  @media screen and (max-width: 850px){
    display: block;
    text-align: center;
    margin: 20px 0px; 
  }
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
  box-sizing: border-box;

}
.search_icon{
  position: relative;
  top: 34px;
  left: 30px;
}
.sec1_mainDiv>img{
  position:relative;
  top:20px;
}
.search {
  width: 400px;
  border: none;
  position: relative;
  
  @media screen and (max-width: 485px){
    width: 100%;
  }
  .search_icon{
    position: relative;
    top: 34px;
    left: 30px;
  }
}
.headBtmSearch{
  max-width: 80%;
  width: 100%;
  margin: auto;
  padding: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
   align-items: end;
  @media screen and (max-width: 850px){
    max-width: 100%;
    display: block;
  }
   .headBtnEmpty{
    width: 20%;
    @media screen and (max-width: 1024px){
      width: 20%;
    }
    @media screen and (max-width: 768px){
      width: 0%;
      display: none
    }
  }
}



  .headBtmSearch .headBtmSearch1, .headBtmSearch .headBtmSearch2{
    display: inline-block;
    padding: 0px 20px;
    @media screen and (max-width: 992px){
      width: 100%;
    }
    @media screen and (max-width: 850px){
      display: block;
      width: 275px;
      margin: auto;
    }
  }
  .cardbuttons_main {
    width: 96%;
    display: block;
    margin:10px;

    button{
      font-size: 13px;
      display: inline-block;
      width: 31%;
      margin: 5px 1%;
      max-width: 31%;
      min-width: auto !important;
    }
}

.pagination {
  margin-top : 10px
}
 
`;
const CardsData: ICardData2[] = [
  {
    images: {
      logoImg1: Aptos,
      logoImg2: TetherLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00005962",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Dark Ages",
    APR: "5.88%",
    TVL: "$7,701",
    staked: "$18",
    earned: "$968",
    timeLeft: "3M 16W 17H",
    active: "Active",
    myForm:"All Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: WethLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "WETH/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00015868",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Pirates",
    APR: "3.08%",
    TVL: "$15,173",
    staked: "$12",
    earned: "$1068",
    timeLeft: "4M 17W 18H",
    active: "Active",
    myForm:"All Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },

  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
  {
    images: {
      logoImg1: Aptos,
      logoImg2: UsdCoinLogo,
      cryptoLogo: Aptos,
      graphLogo: Grapglogo,
    },
    type: "USDT/APT",
    connectionType: "Uncorellated",
    cryptoAmount: "0.00276784",
    cryptoName: "APT",
    durationDetails: "Per week per 1 LP",
    gtapheDetails: "Uncorellated",
    itemName: "NFT:",
    itemDetails: "Pontem Space Jacksparrow",
    APR: "0.58%",
    TVL: "$817,204",
    staked: "$1324",
    earned: "$1168",
    timeLeft: "5M 18W 19H",
    active: "Expired",
    myForm:"My Farms"
  },
];
// MAINNET = "mainnet",
//     TESTNET = "mainnet",
//     DEVNET
const FarmsTable: FC = () => {
  const newNetwork = useAppSelector(selectNewNetwork) as any;
  const [selectedFarm, setSelectedFarm] = React.useState<string | null>(
    "Select"
  );
  const [selectedType, setSelectedType] = React.useState<string | null>(
    "Select"
  );
  const provider = getWalletNetwork(newNetwork)
  const transactions = useAppSelector(selectTransactions);
  const [showStackedPopup, setStackedShowPopup] =
    React.useState<boolean>(false);
  const [showUnStackedPopup, setUnStackedShowPopup] =
    React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const account = useAppSelector(selectAccount);
  const [stakeResource, setStakeResource] = useState([]) as any;
  const itemsPerPage = 9;
  const pageCount = Math.ceil(CardsData.length / itemsPerPage);
  const [itemOffset, setItemOffset] = useState(0);
  const [userResource, setUserResource] = useState({});
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = CardsData.slice(itemOffset, endOffset) as any;

  
  useEffect(() => {
    dispatch(fetchCoinsAction(account?.address));
  }, [dispatch, account, newNetwork]);
  const handleShowStackedPopup = () => {
    setStackedShowPopup(true);
  };
  const handleShowUnstackedPopup = () => {
    setUnStackedShowPopup(true);
  };
  const handleCloseStackedPopup = () => {
    setStackedShowPopup(false);
  };
  const handleCloseUnstackedPopup = () => {
    setUnStackedShowPopup(false);
  };
  useEffect(() => {
    // Fetch items from another resources.
    const dataCheck = CardsData.slice(itemOffset, endOffset)
    setStakeResource(dataCheck.filter((v,index) =>
    v.active === selectedType && v.myForm === selectedFarm))
      //setStakeResource(currentItems)as any;
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % CardsData.length;
    setItemOffset(newOffset);
   
    //setStakeResource(currentItems)as any;
  };
  const reset = () => {
    setSelectedFarm("Select")
    setSelectedType("Select")
  }
  const { account: acc } = useWallet();

  const moduleAddress2 = "0x82afe3de6e9acaf4f2de72ae50c3851a65bb86576198ef969937d59190873dfd";

  const fetchList = async () => {
    if (!acc) return [];
    try {

      let stakePoolResource = [] as any
      const images = {
        logoImg1: Aptos,
        logoImg2: TetherLogo,
        cryptoLogo: Aptos,
        graphLogo: Grapglogo,
      }
      stakePoolResource = await provider.getAccountResource(
        moduleAddress2,
        `${moduleAddress2}::stake::StakePool<0x9cc3c27b8d398ab6fc82cbc9dc6b43bb9164f72da465631628163822662a8580::lp_coin::LP<0xc0acbd3f0dc1d5361f8315e60fcbc577a41be51f049ca092ae6db7fa8609fab5::moon_coin::MoonCoin, 0x1::aptos_coin::AptosCoin, 0x45ef7a3a1221e7c10d190a550aa30fa5bc3208ed06ee3661ec0afa3d8b418580::curves::Uncorrelated>, 0x1::aptos_coin::AptosCoin>`,
      );
      const newObj = { ...stakePoolResource, images,active
        : 
        "Active",myForm
        : 
        "All Farms" }
      CardsData.unshift(newObj)
      setStakeResource([...stakeResource, CardsData])
      const eventResource = await provider.getEventsByCreationNumber(
        account?.address,
        "6",
      );


      const tableHandle = (stakePoolResource as any).data.stakes.handle;
      const tableItem = {
        key_type: "address",
        value_type: `${moduleAddress2}::stake::UserStake`,
        key: "0xc0acbd3f0dc1d5361f8315e60fcbc577a41be51f049ca092ae6db7fa8609fab5",
      };
      const currentUserStakeResource = await provider.getTableItem(tableHandle, tableItem);

      setUserResource(currentUserStakeResource)

    } catch (e: any) {

    }
  };
  useEffect(() => {
    fetchList();
  }, [account?.address]);
  useEffect(() => {
    //setStakeResource([...stakeResource, CardsData])
    const dataCheck = CardsData.slice(itemOffset, endOffset)
    setStakeResource(dataCheck.filter((v,index) =>
    v.active === selectedType && v.myForm === selectedFarm ? v : selectedType == "Select" && selectedFarm == "Select"))
  }, [selectedType, CardsData.length, itemOffset])
  const onChange = (e:any)=>{
    if (stakeResource && e.target.value !== '') {
      setStakeResource(stakeResource?.filter((v, k) => {
          if (v?.active?.toLowerCase().startsWith(e.target.value.toLowerCase())) {
          return v
        } else if (v?.myForm?.toLowerCase().startsWith(e.target.value.toLowerCase())) {
          return v
        } else {
          return ''
        }
      }
      ))
    } else {
      return setStakeResource(stakeResource)
    }


    // setStakeResource(CardsData.filter((v) =>
    //   v.active === e.target.value && v.myForm === selectedFarm))
  }
  return (
    <div>
      <SearchBar 
        selectedFarm={selectedFarm}
        setSelectedFarm={setSelectedFarm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        onChange={onChange}
        reset={reset}
        />
      <TableDiv>
        {account ? (
          <>
          {stakeResource?.length > 0 ? (
            <div className="CardsMaindiv">
              {stakeResource?.map((cards: any, index: any) => (
                <FarmCardTemplate
                  index={index}
                  userResource={userResource}
                  cards={cards}
                  onShowStackedPopup={handleShowStackedPopup}
                  onShowUnstackedPopup={handleShowUnstackedPopup}
                  selectedFarm={selectedFarm}
                  selectedType={selectedType}
                />
              ))}
            </div>
            ):(
              <p
              style={{
                minHeight: 400,
                fontWeight: "bolder",
                fontSize: "x-large",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No farms data available
            </p>
            )}
            <div className="pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel="&#8250;"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="&#8249;"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
              />
            </div>
          </>
        ) : (
          <div
            style={{
              height: "350px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ErrorPage />
          </div>
        )}
        <TableDiv>
          {false && (
            <p
              style={{
                minHeight: 400,
                fontWeight: "bolder",
                fontSize: "x-large",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No farms data available
            </p>
          )}
        </TableDiv>
      </TableDiv>
      <UnstackedPopup
        open={showUnStackedPopup}
        onClose={handleCloseUnstackedPopup}
        userResource={userResource}
        stakeResource={stakeResource}
      />
      <StackedPopup
        open={showStackedPopup}
        onClose={handleCloseStackedPopup}
        userResource={userResource}
        stakeResource={stakeResource}
      />
    </div>
  );
};

export default FarmsTable;
