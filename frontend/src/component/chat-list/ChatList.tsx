import {Avatar, Box, Grid} from "@mui/material";

const ChatList = (props: {
    messages: any,
}) => {
    const {messages} = props;

    const activeUsers = Object.values(messages.users)

    return (
        <>
            {activeUsers.map((e: any) => {
                return (
                    <Box sx={{
                        cursor: "pointer",
                        '&:hover': {
                            backgroundColor: '#263552',
                            transitionDuration: '0.5s'
                        }
                    }}>
                        <Grid container minHeight={40} padding={1}>
                            <Grid xs={1.8}>
                                <Avatar>{e.username.charAt(0)}</Avatar>
                            </Grid>
                            <Box>
                                <Grid xs={12} fontSize={15}>
                                    {e.username}
                                </Grid>
                                <Grid xs={10} fontSize={15}>
                                    {e.online ? "online" : "offline"}
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                )
            })}
        </>
    )
}

export default ChatList