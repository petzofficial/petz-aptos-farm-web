import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from "@mui/material/styles";


export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
    const { open } = props;

    const TableDiv = styled("div")`
    .point1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:100% !important;
        margin: 0 auto;
    }
`;
    return (

        <TableDiv>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        backgroundColor: '#211c41',
                        boxShadow: 'none',
                        color: 'white',
                        width: "100%",
                        maxWidth: "400px"
                    },
                }}
            >
                <DialogTitle style={{ textAlign: "center" }} id="alert-dialog-title">
                    {"User Balance details"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <>
                            <div className="bottSec_Main">

                                <div className="point1">
                                    <span>Stake Amount:</span>
                                    <p>100</p>
                                </div>
                                <div className="point1">
                                    <span>Unstake Amount:</span>
                                    <p>100</p>
                                </div>

                                <div className="point1">
                                    <span>User Balance:</span>
                                    <p>$1</p>
                                </div>
                            </div>
                        </>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <Button onClick={() => props.onClose("")}>Apply</Button>
                    <Button onClick={() => props.onClose("")}>Close</Button>
                </DialogActions>
            </Dialog>
        </TableDiv>
    );
}
