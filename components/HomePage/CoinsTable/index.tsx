import { FC, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MuiTable from "@mui/material/Table"; // Rename the imported Table
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch } from "app/hooks";
import Link from "next/link";
import { useAppSelector } from "app/hooks";
import { selectAccount, selectCoins, fetchCoinsAction } from "app/reducers/AccountSlice";
import CopyToClipboard from 'react-copy-to-clipboard';

// Define a styled component with a capitalized name
// const TableDiv = styled.div`
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
`;


const CoinsTable: FC = () => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector(selectCoins)
  const account = useAppSelector(selectAccount)

  useEffect(() => {

    dispatch(fetchCoinsAction(account?.address))
  }, [dispatch, account])

  return (
    <div>
      {/* Use the styled component as a React component */}
      <TableDiv>
        <TableContainer component={Paper} elevation={0}>
          <MuiTable sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
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
            <TableBody>
              {coins?.map((coins, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: "#6b28a9" }}>
                    {coins?.metadata?.name}
                  </TableCell>
                  <TableCell>{coins?.amount}<span>{coins?.metadata?.symbol}</span></TableCell>
                  <TableCell>{coins?.asset_type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </TableDiv>
    </div>
  );
}

export default CoinsTable;
