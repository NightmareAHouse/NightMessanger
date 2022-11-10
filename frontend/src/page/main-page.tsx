import {Grid} from "@mui/material"
import ChatList from "../component/chat-list/ChatList";
import Chat from "../component/chat/Chat";

const MainPage = () => {
    return (
        <Grid container sx={{minHeight: '100vh'}}>
            <Grid xs={2} bgcolor={'#212836'}>
                <ChatList />
            </Grid>
            <Grid xs={10} bgcolor={'#151e2c'}>
                <Chat />
            </Grid>
        </Grid>
    )
}

export default MainPage