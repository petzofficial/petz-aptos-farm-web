import { FC, useEffect, useState } from "react";
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
import ghostImg from "assets/ghost.png";
import {
  fetchNftImgAction,
  fetchTokensAction,
  selectAccount,
  selectNewNetwork,
  selectTokens,
} from "app/reducers/AccountSlice";
import { useRouter } from "next/router";
import Image from "next/image";
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
    th {
      border-bottom: none;
      svg {
        font-size: 14px;
        margin-left: 10px;
      }
    }
    tbody {
    }
    td {
      border-bottom: none;
      a {
        text-decoration: none;
      }
      img {
        display: inline-block;
        margin-right: petz-aptos-dapp-main/components/HomePage/CustomTable/index.tsx
          10px;
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

const TokensTable: FC = () => {
  const dispatch = useAppDispatch();
  const newNetwork = useAppSelector(selectNewNetwork);
  const router = useRouter();
  const tokens = useAppSelector(selectTokens);
  const account = useAppSelector(selectAccount);

  useEffect(() => {
    dispatch(fetchTokensAction());
  }, [dispatch, newNetwork]);

  useEffect(() => {
    if (tokens) {
      tokens?.forEach((token: any) => {
        if (!token?.image) {
          const tokenURI: string = token?.current_token_data?.token_uri;
          dispatch(
            fetchNftImgAction(
              tokenURI,
              token?.last_transaction_version as number
            )
          );
        }
      });
    }
  }, [dispatch, tokens]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(tokens.length / itemsPerPage);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = tokens.slice(itemOffset, endOffset);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % tokens.length;
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
            {account && (
              <TableBody>
                {currentItems?.map((token: any, index: any) => (
                  <TableRow
                    key={index}
                    onClick={() => {
                      router.push(`/tokens/${token?.last_transaction_version}`);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell>
                      {token?.image ? (
                        <Image
                          src={token?.image}
                          width="50"
                          height="50"
                          alt="TokenImage"
                        />
                      ) : (
                        ""
                      )}
                    </TableCell>
                    <TableCell style={{ color: "#6b28a9" }}>
                      {token?.current_token_data?.token_name}
                    </TableCell>
                    <TableCell>
                      {
                        token?.current_token_data?.current_collection
                          ?.collection_name
                      }
                    </TableCell>
                    <TableCell>
                      <span>{token?.table_type_v1}</span>
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
            )}
          </MuiTable>
          {!account && <ErrorPage />}
          {!tokens.length && account && (
            <p
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "x-large",
              }}
            >
              No tokens data available
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
export default TokensTable;
