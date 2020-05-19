import React, {useState, useEffect} from 'react';
import { Dialog, DialogTitle, makeStyles, DialogContentText, DialogContent } from '@material-ui/core'


interface DialogProps {
    title: string,
    body: string,
    open: boolean,
    onClose(e: any): void
}

const SimpleDialog = (props: DialogProps) => {

    const {title, body, open, onClose} = props;

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {body}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default SimpleDialog;