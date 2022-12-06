import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

// const Transition = React.forwardRef(function Transition(
//     props: TransitionProps & {
//         children: React.ReactElement<any, any>;
//     },
//     ref: React.Ref<unknown>,
// ) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

const RenameChat = (props: {
    open: any,
    handleClose: any,
    message: any
}) => {
    const {open, handleClose, message} = props

    const [chatName, setChatName] = useState<string>(message.chatName[0]);

    const renameChat = () => {
        message.changeChatName(chatName)
        setChatName(chatName);
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}>
            <DialogTitle>
                Rename Chat
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField sx={{marginTop: 0.7}} label="Chat Name" variant="outlined" value={chatName} onChange={(e) => {
                        setChatName(e.target.value);
                    }}/>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={renameChat} autoFocus>
                    Update Chat
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default RenameChat