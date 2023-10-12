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
                        color: 'white',
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "30px",
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#ecf0f4', position: 'relative' }}>
                    <DialogTitle className="main_heading" id="alert-dialog-title"
                        sx={{ color: '#452a7a', height: '70px', fontSize: '22px', fontWeight: '900' }}>



                        {"Stake in Pool"}
                    </DialogTitle>
                    <Image onClick={() => props.onClose("")} src={closeIcon} alt="logo" style={{ cursor: "pointer", width: 25, height: 25, position: 'absolute', top: '20px', right: '20px' }} />
                </Box>
                <DialogContent sx={{ padding: "0px 30px" }}>
                    <DialogContentText id="alert-dialog-description">
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '60px' }}>
                                <h5 style={{ color: '#452a7a', height: '70px', fontSize: '22px', fontWeight: '900' }}>Stake:</h5>
                                <h5 style={{ color: '#452a7a', height: '70px', fontSize: '22px', fontWeight: '900' }}>CAKE</h5>
                            </Box>
                            <Box>
                                <Box sx={{ height: '120px', backgroundColor: '#eeeaf4', borderRadius: '20px' }}>
                                    <h4 style={{ color: '#452a7a', fontSize: '22px', textAlign: 'right', marginBottom: '15px', padding: '25px 15px 0px 0px', fontWeight: '600' }}>0.6000000000000000</h4>
                                    <p style={{ color: '#a194c5', fontSize: '17px', textAlign: 'right', padding: '0px 15px 0px 0px', fontWeight: '600' }}>~22.37 USD</p>
                                </Box>
                                <DialogTitle style={{ textAlign: 'right', color: '#a79bc9', padding: '5px 3px 24px 0px', fontWeight: 'bolder' }}>Balance: 2</DialogTitle>
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
                                <span style={{ display: 'inline-block', width: '23%', height: '30px', margin: '10px 2% 10px 0px', backgroundColor: '#eff4f5', textAlign: 'center', lineHeight: '32px', borderRadius: '50px', fontSize: '18px', fontWeight: '600', color: '#502a7a' }}>25%</span>
                                <span style={{ display: 'inline-block', width: '23%', height: '30px', margin: '10px 2% 10px 0px', backgroundColor: '#eff4f5', textAlign: 'center', lineHeight: '32px', borderRadius: '50px', fontSize: '18px', fontWeight: '600', color: '#502a7a' }}>50%</span>
                                <span style={{ display: 'inline-block', width: '23%', height: '30px', margin: '10px 2% 10px 0px', backgroundColor: '#eff4f5', textAlign: 'center', lineHeight: '32px', borderRadius: '50px', fontSize: '18px', fontWeight: '600', color: '#502a7a' }}>75%</span>
                                <span style={{ display: 'inline-block', width: '23%', height: '30px', margin: '10px 2% 10px 0px', backgroundColor: '#eff4f5', textAlign: 'center', lineHeight: '32px', borderRadius: '50px', fontSize: '18px', fontWeight: '600', color: '#502a7a' }}>MAX</span>
                            </Box>
                        </>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center', display: "flex", flexDirection: "column", paddingBottom: '30px' }}>
                    <Button sx={{ width: '75%', height: '60px', marginLeft: "10px", backgroundColor: '#f49c63', borderRadius: '22px', fontSize: '22px', fontWeight: 'bolder', color: '#fff', marginTop: '25px', '&:hover': { backgroundColor: '#f47c63' } }} onClick={() => props.onClose("")}>Confirm</Button>
                    <Button sx={{ width: '75%', height: '60px', backgroundColor: '#fff', borderRadius: '22px', fontSize: '22px', fontWeight: 'bolder', color: '#f49c63', marginTop: '25px', border: '4px solid #f49c63 ', '&:hover': { backgroundColor: '#f49c63', color: '#fff' } }} onClick={() => props.onClose("")}>Get CAKE</Button>
                </DialogActions>
            </Dialog>
        </TableDiv >
    );
}
