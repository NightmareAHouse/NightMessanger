import {Avatar, Box, Grid} from "@mui/material";

const ChatList = (props: {
    users: never[],
}) => {
    const {users} = props;

    const activeUsers = Object.values(users);

    return (
        <>
            {activeUsers.map((e: any) => {
                console.log(e);
                console.log(e.username + " " + typeof e.username);
                return (
                    <Box sx={{
                        cursor: "pointer",
                        '&:hover': {
                            backgroundColor: '#263552',
                            transitionDuration: '0.5s'
                        }
                    }}>
                        <Grid container minHeight={40} padding={1}>
                            <Grid item xs={1.8}>
                                <Avatar>{e.username.charAt(0)}</Avatar>
                            </Grid>
                            <Box>
                                <Grid item xs={12} fontSize={15}>
                                    {e.username}
                                </Grid>
                                <Grid item xs={10} fontSize={15}>
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