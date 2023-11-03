import { FC, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiTable from "@mui/material/Table"; // Rename the imported Table
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch } from "app/hooks";
import { useAppSelector } from "app/hooks";
import {
  selectAccount,
  selectCoins,
  fetchCoinsAction,
  selectNewNetwork,
} from "app/reducers/AccountSlice";
import { convertToDecimal } from "utils/reUseAbleFunctions/reuseAbleFunctions";
import Image from "next/image";
import Aptos from "../../../assets/aptos-apt-logo.svg";
import Logo from "../../../assets/logo.png";
import ReactPaginate from "react-paginate";
import ghostImg from "assets/ghost.png";
import ErrorPage from "components/ErrorPage/ErrorPage";
// Define a styled component with a capitalized name
const TableDiv = styled("div")`
  width: 100%;
  margin: 30px 0;
  padding: 0px 20px;
  box-shadow: none;

  table {
    @media screen and (max-width: 1276px) {
      width: 1300px;
      overflow: hidden;
      overflow-x: auto;
      position: relative;
      z-index: 99;
    }
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
          background-color: rgba(241, 233, 231, 1);
          padding: 6px 12px;
          border-radius: 10px;
        }
      }
      span {
        background-color: rgba(241, 233, 231, 1);
        padding: 6px 12px;
        border-radius: 10px;
        margin-left: 10px;
        word-break: keep-all;
        line-height: 28px;
        svg {
          font-size: 14px;
          vertical-align: middle;
        }
      }
    }
  }
`;

const CoinsTable: FC = () => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector(selectCoins);
  console.log(">> coins", coins);
  // const coins = null;
  const account = useAppSelector(selectAccount);
  const newNetwork = useAppSelector(selectNewNetwork);
  useEffect(() => {
    dispatch(fetchCoinsAction(account?.address));
  }, [dispatch, account, newNetwork]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(coins?.length / itemsPerPage);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = coins?.slice(itemOffset, endOffset);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % coins?.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      {/* Use the styled component as a React component */}
      <TableDiv>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: "10px",
            border: "3px solid #f1e9e7",
          }}
        >
          <MuiTable sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableHead
              sx={{
                borderBottom: "3px solid #f1e9e7",
              }}
            >
              <TableRow>
                <TableCell>
                  <b>IMAGE</b>
                </TableCell>
                <TableCell>
                  <b>NAME</b>
                </TableCell>
                <TableCell>
                  <b>AMOUNT</b>
                </TableCell>
                <TableCell>
                  <b>COIN TYPE</b>
                </TableCell>
              </TableRow>
            </TableHead>
            {account && (
              <TableBody>
                {currentItems?.map((coins, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Image
                        src={
                          coins?.metadata?.symbol === "APT"
                            ? Aptos
                            : coins?.metadata?.icon_uri || ""
                        }
                        width="150"
                        height="150"
                        alt="Coin Image"
                        className="abc"
                        unoptimized
                      />
                    </TableCell>
                    <TableCell style={{ color: "#6b28a9" }}>
                      {coins?.metadata?.name}
                    </TableCell>
                    <TableCell>
                      {coins?.amount / 10 ** 8}
                      <span>{coins?.metadata?.symbol}</span>
                    </TableCell>
                    <TableCell>{coins?.asset_type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </MuiTable>
          {(!account && <ErrorPage />) ||
            (!currentItems && (
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  fontSize: "x-large",
                }}
              >
                No coins data available
              </p>
            ))}
        </TableContainer>
      </TableDiv>
      {currentItems && (
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
      )}
    </div>
  );
};

export default CoinsTable;
