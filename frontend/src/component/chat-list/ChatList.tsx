import {Avatar, Box, ClickAwayListener, Grid} from "@mui/material";
import {useState} from "react";

const ChatList = (props: {
    users: never[],
}) => {
    const {users} = props;
    const activeUsers = Object.values(users);

    const [open, setOpen] = useState<boolean[]>(() => {
        let array: boolean[] = []
        activeUsers.forEach(() => {
            array.push(false);
        })
        return array;
    });

    const handleClick = (index: number) => {
        let array: boolean[] = [];
        open.forEach((e) => {
            array.push(e)
        })
        array[index] = !array[index];
        setOpen(array);
    };

    const handleClickAway = () => {
        setOpen(() => {
            let array: boolean[] = [];
            open.forEach(() => {
                array.push(false);
            })
            return array;
        });
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box>
                {activeUsers.map((e: any, index) => {
                    return (
                        <>
                            <Box key={index.toString()} sx={{
                                cursor: "pointer",
                                '&:hover': {
                                    backgroundColor: '#263552',
                                    transitionDuration: '0.5s'
                                }
                            }} onClick={() => handleClick(index)}>
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
                            {open[index] ? (
                                <Box sx={{textAlign: "-webkit-center"}}>
                                    <Box sx={{backgroundColor: '#1c2944', width: 250, height: 175}}>
                                        <Grid key={index.toString()} container minHeight={40} padding={1}
                                              borderRadius={1} borderBottom={1} borderTop={0} borderLeft={0} borderRight={0}
                                              borderColor={'#33353b'} alignItems={'center'}>
                                            <Grid item xs={1.8}>
                                                <Avatar>{e.username.charAt(0)}</Avatar>
                                            </Grid>
                                            <Grid item xs={10}>
                                                {e.username}
                                            </Grid>
                                        </Grid>
                                        <Box textAlign={'start'} fontWeight={'bold'} p={1} height={'5px'}>
                                            About Me:
                                        </Box>
                                        <Box textAlign={'start'} p={1}>
                                            {e.aboutUser}
                                        </Box>
                                    </Box>
                                </Box>
                            ) : null}
                        </>
                    )
                })}
            </Box>
        </ClickAwayListener>
    )
}

export default ChatList