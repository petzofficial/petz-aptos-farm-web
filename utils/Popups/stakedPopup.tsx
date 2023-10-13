import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';
import closeIcon from "../../assets/closeIcon.svg"
import Image from 'next/image';
import Slider from '@mui/material/Slider';

const MySlider = styled(Slider)(() => ({
    '& .MuiSlider-thumb': {
        backgroundColor: '#f49c63',
    },
    '& .MuiSlider-rail': {
        backgroundColor: '#f49c63',
    },
    '& .MuiSlider-track': {
        backgroundColor: '#f49c63',
    },
}));

export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}
const marks = [
    {
        value: 25,
        label: '25%',
    },
    {
        value: 50,
        label: '50%',
    },
    {
        value: 75,
        label: '75%',
    },
    {
        value: 100,
        label: 'MAX',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}
export function StackedPopup(props: SimpleDialogProps) {
    const { open } = props;

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
    .custom-input {
        border: none;
        color: #fff;
        font-size: 22px;
        text-align: right;
        padding: 25px 15px 0 0;
        margin-top: 10px;
        font-weight: 600;
        width: 100%;
        background-color: transparent;
        outline: none;
        -webkit-appearance: none; /* For Safari */
        appearance: none;
      }
      
    `;


    function valuetext(value: number) {
        return `${value}`;
    }
    return (
        <TableDiv>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        backgroundColor: '#fff',
                        boxShadow: 'none',
                        color: '#000',
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "30px",
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f1e9e7', position: 'relative', height: "80px" }}>
                    <DialogTitle className="main_heading" id="alert-dialog-title"
                        sx={{ color: '#000', fontWeight: '900' }}>
                        <h3>Stake in Pool</h3>
                    </DialogTitle>
                    <Image onClick={() => props.onClose("")} src={closeIcon} alt="logo" style={{ cursor: "pointer", width: 25, height: 30, position: 'absolute', top: '25px', right: '20px' }} />
                </Box>
                <DialogContent sx={{ padding: "0px 30px" }}>
                    <DialogContentText id="alert-dialog-description">
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '60px' }}>
                                <h4 style={{ color: '#000', fontWeight: '600' }}>Stake:</h4>
                                <h4 style={{ color: '#000', fontWeight: '600' }}>CAKE</h4>
                            </Box>
                            <Box>
                                <Box sx={{ height: '100px', backgroundColor: '#f1e9e7', borderRadius: '20px' }}>
                                    <input type='text' placeholder='0.000' style={{
                                        border: 'none', color: '#000', fontSize: '13px', textAlign: 'right', padding: '25px 15px 0px 0px', fontWeight: '600', width: '100%', backgroundColor: 'transparent', outline: "none", appearance: 'textfield', WebkitAppearance: 'textfield', MozAppearance: 'textfield'
                                    }} />

                                    <p style={{ color: '#000', fontSize: '13px', textAlign: 'right', padding: '0px 15px 0px 0px', fontWeight: '600' }}>~22.37 USD</p>
                                </Box>
                                <DialogTitle style={{ textAlign: 'right', color: '#000', padding: '5px 3px', fontWeight: 'bolder', fontSize: '13px' }}>Balance: 2</DialogTitle>
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <MySlider
                                    aria-label="Always visible"
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    step={10}
                                    valueLabelDisplay="on"
                                />
                            </Box>

                            <Box>
                                <span style={{ display: 'inline-block', width: '23%', height: '30px', margin: '10px 2% 10px 0px', backgroundColor: '#eff4f5', textAlign: 'center', lineHeight: '32px', borderRadius: '50px', fontSize: '13px', fontWeight: '600', color: '#000' }}>25%</span>
                                <span style={{ display: 'inline-block', width: '23%', height: '30px', margin: '10px 2% 10px 0px', backgroundColor: '#eff4f5', textAlign: 'center', lineHeight: '32px', borderRadius: '50px', fontSize: '13px', fontWeight: '600', color: '#000' }}>50%</span>
                                <span style={{ display: 'inline-block', width: '23%', height: '30px', margin: '10px 2% 10px 0px', backgroundColor: '#eff4f5', textAlign: 'center', lineHeight: '32px', borderRadius: '50px', fontSize: '13px', fontWeight: '600', color: '#000' }}>75%</span>
                                <span style={{ display: 'inline-block', width: '23%', height: '30px', margin: '10px 2% 10px 0px', backgroundColor: '#eff4f5', textAlign: 'center', lineHeight: '32px', borderRadius: '50px', fontSize: '13px', fontWeight: '600', color: '#000' }}>MAX</span>
                            </Box>
                        </>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center', display: "flex", flexDirection: "column", paddingBottom: '30px' }}>
                    <Button
                        sx={{ width: '50%', height: '40px', marginLeft: "10px", backgroundColor: '#f49c63', borderRadius: '20px', fontSize: '13px', fontWeight: 'bolder', color: '#fff', marginTop: '8px', '&:hover': { backgroundColor: '#f47c63' } }}
                        onClick={() => props.onClose("")}
                    >
                        Confirm
                    </Button>
                    <Button
                        sx={{ width: '50%', height: '40px', backgroundColor: '#fff', borderRadius: '20px', fontSize: '13px', fontWeight: 'bolder', color: '#f49c63', marginTop: '8px', border: '2px solid #f49c63 ', '&:hover': { backgroundColor: '#f49c63', color: '#fff' } }}
                        onClick={() => props.onClose("")}
                    >
                        Get CAKE
                    </Button>
                </DialogActions>
            </Dialog >
        </TableDiv >
    );
}
