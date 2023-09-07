import { FC } from "react";
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

// Define a styled component with a capitalized name
// const TableDiv = styled.div`
const TableDiv = styled("div")`
  width: 100%;
  margin: 30px 0;
  padding: 0px 20px;
  table {
    th {
      svg {
        font-size: 14px;
        margin-left: 10px;
      }
    }
    td {
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
  const tableRows: any = [];

  for (let i = 1; i <= 3; i++) {
    tableRows.push(
      <TableRow key={i}>
        <TableCell style={{ color: "#6b28a9" }}>
          <Link href="/transactions">539251878</Link>
        </TableCell>
        <TableCell>
          <Image
            src={TypeArrow}
            alt="asd"
            style={{ width: "23px", objectFit: "contain" }}
          />
        </TableCell>
        <TableCell>08/17/2023 16:52:02</TableCell>
        <TableCell>
          <Image src={SenderImg} alt="" />
          <span>
            0xc0ac...fab5 <ContentCopyIcon />
          </span>
        </TableCell>
        <TableCell>
          <Image src={SendToImg} alt="" />
          <span>
            0x1 <ContentCopyIcon />
          </span>
        </TableCell>
        <TableCell>
          <span>code::publish package txn</span>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <div>
      {/* Use the styled component as a React component */}
      <TableDiv>
        <TableContainer component={Paper}>
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
              {/* <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>539251878</TableCell>
                <TableCell>
                  <Image src={TypeArrow} alt="asd" />
                </TableCell>
                <TableCell>08/17/2023 16:52:02</TableCell>
                <TableCell>
                  <Image src={SenderImg} alt="" />
                  <span>
                    0xc0ac...fab5 <ContentCopyIcon />
                  </span>
                </TableCell>
                <TableCell>
                  <Image src={SendToImg} alt="" />
                  <span>
                    0x1 <ContentCopyIcon />
                  </span>
                </TableCell>
                <TableCell>
                  <span>code::publish package txn</span>
                </TableCell>
              </TableRow> */}
              {tableRows}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </TableDiv>
    </div>
  );
}

export default CustomTable;
