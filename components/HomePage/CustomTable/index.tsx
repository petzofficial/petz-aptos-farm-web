import { FC, useState } from "react";
import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiTable from "@mui/material/Table"; // Rename the imported Table
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SenderImg from "../../../assets/sender.png";
import SendToImg from "../../../assets/sendto.png";
import TypeArrow from "../../../assets/arrowtype.png";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "app/hooks";
import { selectTransactions } from "app/reducers/AccountSlice";
import CopyToClipboard from 'react-copy-to-clipboard';
import { shortenString, formatTimestamp } from "reUseAbleFunctions/reuseAbleFunctions";

import { useAppSelector } from "app/hooks";
import { selectTransactions } from "app/reducers/AccountSlice";
import CopyToClipboard from 'react-copy-to-clipboard';
import { shortenString, formatTimestamp } from "reUseAbleFunctions/reuseAbleFunctions";


// Define a styled component with a capitalized name
// const TableDiv = styled.div`
const TableDiv = styled("div")`
  width: 100%;
  margin: 30px 0;
  padding: 0px 20px;
  box-shadow: none;
  
  box-shadow: none;
  
  table {
    box-shadow: none;
    box-shadow: none;
    th {
      border-bottom: none;
      border-bottom: none;
      svg {
        font-size: 14px;
        margin-left: 10px;
      }
    }
    td {
      border-bottom: none;
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
`;


const CustomTable: FC = () => {
  const transactions = useAppSelector(selectTransactions)
  const transactions = useAppSelector(selectTransactions)

  return (
    <div>
      <TableDiv>
        <TableContainer component={Paper} elevation={0}>
          <TableContainer component={Paper} elevation={0}>
            <MuiTable sx={{ minWidth: 1200 }} aria-label="simple table">
              <TableHead>
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
              <TableBody>
                {transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ color: "#6b28a9" }}>
                      <Link href="/transactions">{transaction?.version}</Link>
                    </TableCell>
                    <TableCell>
                      <Image
                        src={TypeArrow}
                        alt="asd"
                        style={{ width: "23px", objectFit: "contain" }}
                      />
                    </TableCell>
                    <TableCell>{formatTimestamp(transaction?.timestamp)}</TableCell>
                    <TableCell>
                      <Image src={SenderImg} alt="" />
                      <span>
                        {shortenString(transaction?.hash)} <ContentCopyIcon style={{ color: "#000", cursor: "pointer" }} onClick={() => {
                          navigator.clipboard.writeText(transaction?.hash);
                        }} />
                      </span>
                    </TableCell>
                    <TableCell>
                      <Image src={SendToImg} alt="" />

                      <span>{shortenString(transaction?.payload?.function.split('::')[0])}  <ContentCopyIcon style={{ cursor: "pointer" }} onClick={() => {
                        navigator.clipboard.writeText(transaction?.payload?.function);
                      }} /></span>

                    </TableCell>
                    <TableCell>
                      <span style={{ color: "#000", cursor: "pointer" }}>{transaction?.payload?.function.split('::code::')[1]}</span>
                    </TableCell>
                  </TableRow>
                ))}

              </TableBody>
            </MuiTable>
          </TableContainer>
      </TableDiv>
    </div>
  );
}

export default CustomTable;
