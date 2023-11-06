import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SenderImg from "../../../assets/sender.png";
import SendToImg from "../../../assets/sendto.png";
import TypeArrow from "../../../assets/arrowtype.png";
import ghostImg from "assets/ghost.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppSelector } from "app/hooks";
import { selectAccount, selectTransactions } from "app/reducers/AccountSlice";
import {
  shortenString,
  formatTimestamp,
} from "utils/reUseAbleFunctions/reuseAbleFunctions";
import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import ErrorPage from "components/ErrorPage/ErrorPage";
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
    tbody {
    }
    th {
      max-width: 1200px;
      border-bottom: none;
      width: 18%;
      padding: 10px;
      &:first-child {
        width: 10%;
      }
      &:nth-child(2) {
        width: 9%;
      }
      &:nth-child(3) {
        width: 10%;
      }
      &:last-child {
        width: 35%;
      }

      svg {
        font-size: 14px;
        margin-left: 10px;
      }
    }
    td {
      border-bottom: none;
      padding: 10px;
      width: 20%;
      &:first-child {
        width: 10%;
      }
      &:nth-child(2) {
        width: 8%;
      }
      &:nth-child(3) {
        width: 10%;
      }
      &:last-child {
        width: 35%;
      }
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
        svg {
          font-size: 14px;
          vertical-align: middle;
        }
      }
    }
  }
`;

const CustomTable: FC = () => {
  const router = useRouter();
  const transactions = useAppSelector(selectTransactions);
  const account = useAppSelector(selectAccount);
  const sortedTransactions = [...transactions].sort(
    (a, b) => b.timestamp - a.timestamp
  );
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(sortedTransactions.length / itemsPerPage);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = sortedTransactions.slice(itemOffset, endOffset) as any;

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % transactions.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <TableDiv>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: "10px",
            border: "3px solid #f1e9e7",
          }}
        >
          <MuiTable
            sx={{
              minWidth: 1200,
            }}
            aria-label="simple table"
          >
            <TableHead
              sx={{
                borderBottom: "3px solid #f1e9e7",
              }}
            >
              <TableRow>
                <TableCell>
                  <b>VERSION</b>
                </TableCell>
                <TableCell>
                  <b>TYPE</b>
                  <InfoOutlinedIcon />
                </TableCell>
                <TableCell>
                  <b>TIMESTAMP</b>
                </TableCell>
                <TableCell>
                  <b>SENDER</b>
                </TableCell>
                <TableCell>
                  <b>SENT TO</b>
                </TableCell>
                <TableCell>
                  <b>FUNCTION</b>
                </TableCell>
              </TableRow>
            </TableHead>
            {account && (
              <TableBody>
                {currentItems?.map((transaction: any, index: any) => (
                  <TableRow
                    key={index}
                    onClick={() => {
                      router.push(`/transactions/${transaction?.version}`);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell style={{ color: "#6b28a9" }}>
                      {transaction?.version}
                    </TableCell>
                    <TableCell>
                      <Image
                        src={TypeArrow}
                        alt="asd"
                        style={{ width: "23px", objectFit: "contain" }}
                      />
                    </TableCell>
                    <TableCell>
                      {formatTimestamp(transaction?.timestamp)}
                    </TableCell>
                    <TableCell>
                      <Image src={SenderImg} alt="" />
                      <span>
                        {shortenString(transaction?.sender)}{" "}
                        <ContentCopyIcon
                          style={{ color: "#000", cursor: "pointer" }}
                          onClick={() => {
                            navigator.clipboard.writeText(transaction?.sender);
                          }}
                        />
                      </span>
                    </TableCell>
                    <TableCell>
                      <Image src={SendToImg} alt="" />

                      <span>
                        {shortenString(
                          transaction?.payload?.function.split("::")[0]
                        )}{" "}
                        <ContentCopyIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              shortenString(
                                transaction?.payload?.function.split("::")[0]
                              )
                            );
                          }}
                        />
                      </span>
                    </TableCell>
                    <TableCell>
                      {transaction?.payload?.function ? (
                        <span style={{ color: "#000", cursor: "pointer" }}>
                          {(transaction?.payload?.function?.split("::") || [])
                            .slice(1)
                            .join("::")}
                        </span>
                      ) : (
                        <span style={{ color: "#000", cursor: "pointer" }}>
                          Script
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </MuiTable>
          {!account && <ErrorPage />}
          {!transactions.length && account && (
            <p
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "x-large",
              }}
            >
              No Transactions data available
            </p>
          )}
        </TableContainer>
      </TableDiv>
      {account && (
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

export default CustomTable;
