import {Avatar, Box, ClickAwayListener, Grid, IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {nanoid} from "nanoid";

const ChatList = (props: {
    users: never[],
    changeProfile: () => void;
}) => {
    const {users, changeProfile} = props;
    const activeUsers = Object.entries(users);
    const [userId] = useLocalStorage('userId', nanoid(8))

    activeUsers.forEach((e: any) => {
        e[1].currentUser = e[0] === userId;
    })

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
                                        <Avatar>{e[1].username.charAt(0)}</Avatar>
                                    </Grid>
                                    <Box>
                                        <Grid item xs={12} fontSize={15}>
                                            {e[1].username}
                                        </Grid>
                                        <Grid item xs={10} fontSize={15}>
                                            {e[1].online ? "online" : "offline"}
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Box>
                            {open[index] ? (
                                <Box sx={{textAlign: "-webkit-center"}}>
                                    <Box sx={{backgroundColor: '#1c2944', width: 250, height: 175}}>
                                        <Grid key={index.toString()} container minHeight={40} padding={1}
                                              borderRadius={1} borderBottom={1} borderTop={0} borderLeft={0}
                                              borderRight={0}
                                              borderColor={'#33353b'} alignItems={'center'}>
                                            <Grid item xs={1.8}>
                                                <Avatar>{e[1].username.charAt(0)}</Avatar>
                                            </Grid>
                                            <Grid item xs={8}>
                                                {e[1].username}
                                            </Grid>
                                            {e[1].currentUser ? (
                                                <Grid item xs={1}>
                                                    <IconButton onClick={changeProfile} color="inherit"
                                                                aria-label="directions">
                                                        <EditIcon sx={{width: 15, height: 15}}/>
                                                    </IconButton>
                                                </Grid>
                                            ) : (<></>)}

                                        </Grid>
                                        <Box textAlign={'start'} fontWeight={'bold'} p={1} height={'5px'}>
                                            About Me:
                                        </Box>
                                        <Box textAlign={'start'} p={1}>
                                            {e[1].aboutUser}
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

export default ChatList;