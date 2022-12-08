import {Box, Grid, Modal, TextField, Button} from "@mui/material"
import ChatList from "../component/chat-list/ChatList";
import Chat from "../component/chat/Chat";
import {useState} from "react";
import {useChat} from "../hooks/useChat";
import {ErrorBoundary} from "../component/error-boundary/ErrorBoundary";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {nanoid} from "nanoid";

const ModalBoxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    textAlign: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const MainPage = () => {
    const [openChangeProfile, setOpenChangeProfile] = useState(false);
    const [userId] = useLocalStorage('userId', nanoid(8))
    const [userName, setUsername] = useLocalStorage('username', "Jack");
    const [aboutMe, setAboutMe] = useLocalStorage("aboutMe", "");

    const messages = useChat(0);

    const handleChangeName = (e: any) => setUsername(e.target.value)

    const handleChangeAboutMe = (e: any) => setAboutMe(e.target.value)


    const onClickChangeProfile = () => setOpenChangeProfile(true);
    const handleCloseProfile = () => setOpenChangeProfile(false);
    const onFinish = () => {
        messages.userRename(userName, userId, aboutMe)
        setOpenChangeProfile(false);
    }

    const activeUsers = Object.entries(messages.users);
    console.log(activeUsers);

    return (
        <>
            <Grid container sx={{minHeight: '100vh'}}>
                <Grid item xs={2} bgcolor={'#212836'}>
                    <ErrorBoundary>
                        <ChatList users={messages.users} changeProfile={onClickChangeProfile}/>
                    </ErrorBoundary>
                </Grid>
                <Grid item xs={10} bgcolor={'#151e2c'}>
                    <ErrorBoundary>
                        <Chat messages={messages}/>
                    </ErrorBoundary>
                </Grid>
            </Grid>
            <Modal open={openChangeProfile} onClose={handleCloseProfile} aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={ModalBoxStyle}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        sx={{width: 400}}
                        value={userName}
                        defaultValue={userName}
                        onChange={handleChangeName}
                    />
                    <div style={{margin: 10}}/>
                    <TextField
                        required
                        id="outlined-required"
                        label="About me"
                        sx={{width: 400}}
                        value={aboutMe}
                        defaultValue={aboutMe}
                        onChange={handleChangeAboutMe}
                    />

                    <Button onClick={onFinish}>
                        Change Profile
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default MainPage