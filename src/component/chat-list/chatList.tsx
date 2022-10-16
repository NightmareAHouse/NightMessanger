import {Avatar, Box, Grid} from "@mui/material";

const ChatList = () => {
    return (
        <Box>
            <Grid container minHeight={40}>
                <Grid xs={2}>
                    <Avatar>W</Avatar>
                </Grid>
                <Grid xs={4}>
                    Texto
                </Grid>
            </Grid>
        </Box>
    )
}

export default ChatList