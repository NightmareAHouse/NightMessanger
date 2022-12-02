import {Avatar, Box, ClickAwayListener, Grid} from "@mui/material";
import {useState} from "react";

const ChatList = (props: {
    users: never[],
}) => {
    const {users} = props;
    const [open, setOpen] = useState(false);

    const activeUsers = Object.values(users);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <>
            {activeUsers.map((e: any, index) => {
                return (
                    <>
                        <Box key={index.toString()} sx={{
                            cursor: "pointer",
                            '&:hover': {
                                backgroundColor: '#263552',
                                transitionDuration: '0.5s'
                            }
                        }} onClick={handleClick}>
                            <Grid key={index.toString()} container minHeight={40} padding={1}>
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
                        {open ? (
                            <Box sx={{backgroundColor: 'red', width: 225, height: 175}}>
                                Click me, I will stay visible until you click outside.
                            </Box>
                        ) : null}
                    </>
                )
            })}
        </>
    )
}

export default ChatList