import {Avatar, Box, Grid, IconButton, InputBase, Paper, Stack, Typography} from "@mui/material"
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import {styled} from '@mui/material/styles';
import {useState} from "react";

interface ChatInterface {
    messageId: number,
    messageSender: string,
    message: string,
    userMessage: boolean
}

const Chat = () => {
    const Item = styled(Typography)(({theme}) => ({
        backgroundColor: '#283f5a',
        maxWidth: 500,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: 'gray',
        marginLeft: 15,
        marginRight: 15
    }));

    const [chatMessageData, setChatMessageData] = useState<ChatInterface[]>([{
        messageId: 0,
        message: "Hi! How are you?",
        messageSender: 'Test Testovich',
        userMessage: false
    }])
    const [message, setMessage] = useState<string>("");

    function hz(inputStringArr: string) {
        let word: string = '';
        const stringArr = inputStringArr.split(" ");
        stringArr.forEach((e) => {
            if (e.length > 56) {
                let wordArr = e.split('');
                wordArr.forEach((e, index) => {
                    if (index === 56) {
                        word += ` ${e}`
                    } else {
                        word += e
                    }
                })
            } else {
                word += `${e} `
            }
        })

        return word
    }

    const addMessageInChat = (message: string) => {
        const test = hz(message);
        const test2 = hz(test);
        const test3 = hz(test2);
        const test4 = hz(test3);
        setChatMessageData(prevState => [...prevState, {
            messageId: (chatMessageData.length - 1),
            messageSender: "Kirills Meletins",
            message: test4,
            userMessage: true,
        }])

        setMessage("")
    }

    return (
        <>
            <Box bgcolor={'#25334e78'} minHeight={'7vh'} width={'100%'} display={'flex'}>
                <Paper sx={{display: "flex", width: '100%', backgroundColor: '#25334e78'}}>
                    <Box padding={1} color={'white'}>
                        <Grid xs={25} fontSize={22}>
                            Test Testovich
                        </Grid>
                        <Grid xs={25} fontSize={12}>
                            Was online 2 hours ago
                        </Grid>
                    </Box>
                    <Box sx={{ml: 1, flex: 1}}/>
                    <Box sx={{p: '8px'}}>
                        <IconButton color="primary" aria-label="directions">
                            <SettingsSharpIcon/>
                        </IconButton>
                        <IconButton color="primary" aria-label="directions">
                            <SearchOutlinedIcon/>
                        </IconButton>
                    </Box>
                </Paper>
            </Box>

            <Box maxHeight={'88vh'} height={'100%'} sx={{overflow: "hidden", overflowY: "scroll"}}>
                <Stack>
                    {chatMessageData.map((e) => {
                        if (e.userMessage) {
                            return (
                                <Grid container justifyContent={'end'} wrap="nowrap"
                                      marginTop={'5px'} padding={1}>
                                    <Grid sx={{alignSelf: 'center'}} item>
                                        <Item>
                                            <Typography>{e.message}</Typography>
                                        </Item>
                                    </Grid>
                                    <Grid item>
                                        <Avatar>{e.messageSender.charAt(0)}</Avatar>
                                    </Grid>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid container wrap="nowrap" marginTop={'5px'} padding={1}>
                                    <Grid>
                                        <Avatar>{e.messageSender.charAt(0)}</Avatar>
                                    </Grid>
                                    <Grid sx={{alignSelf: 'center'}}>
                                        <Item>
                                            <Typography>{e.message}</Typography>
                                        </Item>
                                    </Grid>
                                </Grid>
                            )
                        }
                    })}
                </Stack>
            </Box>

            <Box bgcolor={'#25334e78'} minHeight={'5vh'} sx={{textAlign: '-webkit-center'}}>
                <Paper sx={{display: "flex", width: '100%', background: "#25334e78"}}>
                    <IconButton sx={{p: '10px'}} aria-label="menu">
                        <AttachFileOutlinedIcon sx={{color: "grey"}}/>
                    </IconButton>
                    <InputBase
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addMessageInChat(message)
                            }
                        }}
                        placeholder="Wrote message..."
                        sx={{ml: 1, flex: 1, color: "white"}}
                    />
                    <IconButton color="primary" sx={{p: '10px'}} aria-label="directions">
                        <SentimentSatisfiedAltIcon/>
                    </IconButton>
                    <IconButton onClick={() => {
                        addMessageInChat(message)
                    }} color="primary" sx={{p: '10px'}} aria-label="directions">
                        <SendOutlinedIcon/>
                    </IconButton>
                </Paper>
            </Box>
        </>
    )
}

export default Chat