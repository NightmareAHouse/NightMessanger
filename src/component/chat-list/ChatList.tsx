import {Avatar, Box, Grid} from "@mui/material";

const ChatList = () => {
    return (
        <>
            <Box sx={{
                cursor: "pointer",
                '&:hover': {
                    backgroundColor: '#263552',
                    transitionDuration: '0.5s'
                }

            }}>
                <Grid container minHeight={40} padding={1}>
                    <Grid xs={1.8}>
                        <Avatar>T</Avatar>
                    </Grid>
                    <Box>
                        <Grid xs={10} fontSize={15}>
                            Test testovich
                        </Grid>
                        <Grid xs={12} fontSize={15}>
                            Hi! How are you?
                        </Grid>
                    </Box>
                </Grid>
            </Box>

            <Box sx={{
                cursor: "pointer",
                '&:hover': {
                    backgroundColor: '#263552',
                    transitionDuration: '0.5s'
                }

            }}>
                <Grid container minHeight={40} padding={1}>
                    <Grid xs={1.8}>
                        <Avatar>V</Avatar>
                    </Grid>
                    <Box>
                        <Grid xs={10} fontSize={15}>
                            Viktor testovich
                        </Grid>
                        <Grid xs={12} fontSize={15}>
                            Hi! Do you have money?
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default ChatList