import { FC, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { fetchTokensAction, selectAccount, selectTokens } from "app/reducers/AccountSlice";


const TableDiv = styled("div")`
  width: 100%;
  margin: 30px 0;
  padding: 0px 20px;
  table {
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
        margin-right:petz-aptos-dapp-main/components/HomePage/CustomTable/index.tsx 10px;
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


const TokensTable: FC = () => {


  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectTokens)
  const account = useAppSelector(selectAccount)

  useEffect(() => {
    dispatch(fetchTokensAction(account?.address))
  }, [dispatch, account])


  return (
    <div>
      <TableDiv>
        <TableContainer component={Paper} elevation={0}>
          <MuiTable sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>NAME</b>
                </TableCell>
                <TableCell>
                  <b>COLLECTION</b>
                  <InfoOutlinedIcon />
                </TableCell>
                <TableCell>
                  <b>STORE</b>
                </TableCell>
                <TableCell>
                  <b>VERSION</b>
                </TableCell>
                <TableCell>
                  <b>AMOUNT</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {tokens?.map((token, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: "#6b28a9" }}>
                    {token?.current_token_data?.token_name}
                  </TableCell>
                  <TableCell>{token?.current_token_data?.current_collection?.collection_name
                  }</TableCell>
                  <TableCell>
                    <span>
                      {token?.table_type_v1}
                    </span>
                  </TableCell>
                  <TableCell>

                    <span>{token?.property_version_v1}</span>

                  </TableCell>
                  <TableCell>

                    <span>{token?.amount}</span>

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
export default TokensTable;
