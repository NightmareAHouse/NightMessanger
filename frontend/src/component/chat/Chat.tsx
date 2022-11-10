import {Avatar, Box, Grid, IconButton, InputBase, Paper, Stack} from "@mui/material"
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
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: '#283f5a',
        width: 175,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'start',
        color: 'gray',
        marginTop: 0,
        marginLeft: 15,
        marginRight: 15,
    }));

    const [chatMessageData, setChatMessageData] = useState<ChatInterface[]>([{
        messageId: 0,
        message: "Hi! How are you?",
        messageSender: 'Test Testovich',
        userMessage: false
    }])
    const [message, setMessage] = useState<string>("");

    const addMessageInChat = () => {
        setChatMessageData(prevState => [...prevState, {
            messageId: (chatMessageData.length - 1),
            messageSender: "Kirills Meletins",
            message: message,
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

            <Box minHeight={'88vh'}>
                <Stack>
                    {chatMessageData.map((e, index) => {
                        if (e.userMessage) {
                            return (
                                <>
                                    <Grid container minHeight={40} justifyContent={'end'} marginTop={'5px'} padding={1}>
                                        <Grid>
                                            <Item>{e.message}</Item>
                                        </Grid>
                                        <Grid>
                                            <Avatar>{e.messageSender.charAt(0)}</Avatar>
                                        </Grid>
                                    </Grid>
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <Grid container minHeight={40} marginTop={'5px'} padding={1}>
                                        <Grid>
                                            <Avatar>{e.messageSender.charAt(0)}</Avatar>
                                        </Grid>
                                        <Grid>
                                            <Item>{e.message}</Item>
                                        </Grid>
                                    </Grid>
                                </>
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
                            if(e.key === 'Enter') {
                                addMessageInChat()
                            }
                        }}
                        placeholder="Wrote message..."
                        sx={{ml: 1, flex: 1, color: "white"}}
                    />
                    <IconButton color="primary" sx={{p: '10px'}} aria-label="directions">
                        <SentimentSatisfiedAltIcon/>
                    </IconButton>
                    <IconButton onClick={addMessageInChat} color="primary" sx={{p: '10px'}} aria-label="directions">
                        <SendOutlinedIcon/>
                    </IconButton>
                </Paper>
            </Box>
        </>
    )
}

export default Chat