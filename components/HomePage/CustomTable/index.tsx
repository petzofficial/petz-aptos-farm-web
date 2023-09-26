import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiTable from "@mui/material/Table";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
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
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "app/hooks";
import { selectTransactions } from "app/reducers/AccountSlice";
import { shortenString, formatTimestamp } from "utils/reUseAbleFunctions/reuseAbleFunctions";
import { useRouter } from "next/router";
import { useAppSelector } from "app/hooks";
import { selectTransactions } from "app/reducers/AccountSlice";
import { shortenString, formatTimestamp } from "utils/reUseAbleFunctions/reuseAbleFunctions";
import { useRouter } from "next/router";

const TableDiv = styled("div")`
  width: 100%;
  margin: 30px 0;
  padding: 0px 20px;
  box-shadow: none;
  
  table {
    box-shadow: none;
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
`;

const CustomTable: FC = () => {
  const router = useRouter()
  const transactions = useAppSelector(selectTransactions)
  const sortedTransactions = [...transactions].sort((a, b) => b.timestamp - a.timestamp);
  const router = useRouter()
  const transactions = useAppSelector(selectTransactions)
  const sortedTransactions = [...transactions].sort((a, b) => b.timestamp - a.timestamp);
  return (
    <div>
      <TableDiv>
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
              {sortedTransactions?.map((transaction, index) => (
                <TableRow key={index} onClick={() => { router.push(`/transactions/${transaction?.version}`) }} style={{ cursor: "pointer" }}>
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
                  <TableCell>{formatTimestamp(transaction?.timestamp)}</TableCell>
                  <TableCell>
                    <Image src={SenderImg} alt="" />
                    <span>
                      {shortenString(transaction?.sender)} <ContentCopyIcon style={{ color: "#000", cursor: "pointer" }} onClick={() => {
                        navigator.clipboard.writeText(transaction?.sender);
                      }} />
                    </span>
                  </TableCell>
                  <TableCell>
                    <Image src={SendToImg} alt="" />

                    <span>{shortenString(transaction?.payload?.function.split('::')[0])}  <ContentCopyIcon style={{ cursor: "pointer" }} onClick={() => {
                      navigator.clipboard.writeText(shortenString(transaction?.payload?.function.split('::')[0]));
                    }} /></span>

                  </TableCell>
                  <TableCell>
                    {transaction?.payload?.function.split('::code::')[1] ? (<span style={{ color: "#000", cursor: "pointer" }}>{transaction?.payload?.function.split('::code::')[1]}</span>) : (<span style={{ color: "#000", cursor: "pointer" }}>Script</span>)}

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
