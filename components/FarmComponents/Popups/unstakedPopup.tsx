import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import closeIcon from "../../../assets/closeIcon.svg";
import Image from "next/image";
import Slider from "@mui/material/Slider";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { CustomSlider } from "./CustomSlider";
import { useAppSelector } from "app/hooks";
import { selectNewNetwork } from "app/reducers/AccountSlice";
import { getWalletNetwork } from "utils/aptosNetWorks/AptosNetworks";

const MySlider = styled(Slider)(() => ({
  "& .MuiSlider-thumb": {
    backgroundColor: "#f49c63",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#f49c63",
  },
  "& .MuiSlider-track": {
    backgroundColor: "#f49c63",
  },
}));

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  userResource: any;
  stakeResource: any;
}

export function UnstackedPopup(props: SimpleDialogProps) {
  const myRef = useRef<any>("0");
  const { open } = props;
  const newNetwork = useAppSelector(selectNewNetwork) as any;
  const provider = getWalletNetwork(newNetwork);
  const TableDiv = styled("div")`
    .point1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:100% !important;
        margin: 0 auimport { Image } from 'next/image';
        to;import { styled } from 'styled-components/macro';
        import { syntax } from '../../.next/static/chunks/webpack';

    }
    .main_heading{
        background-color:red;
        color:#000;
    }
    `;
  const { account, signAndSubmitTransaction } = useWallet();

  const moduleAddress2 =
    "0x82afe3de6e9acaf4f2de72ae50c3851a65bb86576198ef969937d59190873dfd";
  const handleUnStake = async () => {
    if (!account) return [];

    const payload2 = {
      type: "entry_function_payload",
      function: `${moduleAddress2}::scripts::unstake`,
      type_arguments: [
        "0x9cc3c27b8d398ab6fc82cbc9dc6b43bb9164f72da465631628163822662a8580::lp_coin::LP<0xc0acbd3f0dc1d5361f8315e60fcbc577a41be51f049ca092ae6db7fa8609fab5::moon_coin::MoonCoin, 0x1::aptos_coin::AptosCoin, 0x45ef7a3a1221e7c10d190a550aa30fa5bc3208ed06ee3661ec0afa3d8b418580::curves::Uncorrelated>",
        "0x1::aptos_coin::AptosCoin",
      ],
      arguments: [moduleAddress2, myRef?.current?.value],
    };

    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(payload2);
      // wait for transaction
      await provider.waitForTransaction(response.hash);
    } catch (error: any) {
      console.log("error", error);
    } finally {
      //setTransactionInProgress(false);
    }
  };

  const moonValue = (props?.userResource?.amount / Math.pow(10, 8)).toFixed(8);
  return (
    <TableDiv>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#fff",
            boxShadow: "none",
            color: "white",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "30px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f1e9e7",
            position: "relative",
            height: "80px",
          }}
        >
          <DialogTitle
            className="main_heading"
            id="alert-dialog-title"
            sx={{ color: "#000", fontWeight: "900" }}
          >
            Unstake in Pool
          </DialogTitle>
          <Image
            onClick={() => props.onClose("")}
            src={closeIcon}
            alt="logo"
            style={{
              cursor: "pointer",
              width: 25,
              height: 30,
              position: "absolute",
              top: "25px",
              right: "20px",
            }}
          />
        </Box>
        <DialogContent sx={{ padding: "0px 30px" }}>
          {/* <DialogContentText id="alert-dialog-description"> */}
          <>
            <Box
            // sx={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   height: "60px",
            // }}
            >
              <p
                style={{
                  color: "#000",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  height: "40px",
                }}
              >
                <span>Unstake:</span>
                <span>MOON/APTU</span>
              </p>
              <p style={{ color: "#000", fontWeight: "600" }}></p>
            </Box>
            {/* <Box>
                <DialogTitle
                  style={{
                    textAlign: "right",
                    color: "#000",
                    padding: "5px 3px",
                    fontWeight: "bolder",
                    fontSize: "13px",
                  }}
                ></DialogTitle>
              </Box> */}
            <Box sx={{ width: "100%" }}>
              <CustomSlider myRef={myRef} moonValue={moonValue} />
            </Box>
          </>
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "30px",
          }}
        >
          <Button
            sx={{
              width: "50%",
              height: "40px",
              marginLeft: "10px",
              backgroundColor: "#f49c63",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "bolder",
              color: "#fff",
              marginTop: "8px",
              "&:hover": { backgroundColor: "#f47c63" },
            }}
            onClick={() => {
              handleUnStake();
              props.onClose("");
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </TableDiv>
  );
}
