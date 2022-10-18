import {Box, Grid} from "@mui/material"
import ChatList from "../component/chat-list/ChatList";

const MainPage = () => {
    return (
        <Grid container sx={{minHeight: '100vh'}}>
            <Grid xs={2} bgcolor={'#212836'}>
                <ChatList />
            </Grid>
            <Grid xs={10} bgcolor={'#151e2c'}>
                <Box>chat</Box>
            </Grid>
        </Grid>
    )
}

export default MainPage