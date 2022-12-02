import {Box, Grid} from "@mui/material"
import ChatList from "../component/chat-list/ChatList";
import Chat from "../component/chat/Chat";
import {useState} from "react";
import Autorization from "../component/autorization/Autorization";
import {useChat} from "../hooks/useChat";
import {ErrorBoundary} from "../component/error-boundary/ErrorBoundary";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px',
    boxShadow: 24,
    p: 4,
};

const MainPage = () => {
    const messages = useChat(0);

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    const activeUsers = Object.values(messages.users);
    console.log(activeUsers)

    return (
        <>
            {open ? (
                <>
                    <Box sx={style}>
                        <Autorization closeModal={handleClose}/>
                    </Box>
                </>
            ) : (
                <>
                    <Grid container sx={{minHeight: '100vh'}}>
                        <Grid item xs={2} bgcolor={'#212836'}>
                            <ErrorBoundary>
                                <ChatList users={messages.users}/>
                            </ErrorBoundary>
                        </Grid>
                        <Grid item xs={10} bgcolor={'#151e2c'}>
                            <ErrorBoundary>
                                <Chat messages={messages}/>
                            </ErrorBoundary>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )
}

export default MainPage